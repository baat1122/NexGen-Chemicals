# ==========================================================================
# NexGen Chemicals - PowerShell Zero-Dependency Socket HTTP Server
# ==========================================================================

$port = 8085
$address = [System.Net.IPAddress]::Any
$listener = New-Object System.Net.Sockets.TcpListener($address, $port)

# Set console colors
$Host.UI.RawUI.WindowTitle = "NexGen Chemicals Local Socket Server"

# Discover active local network IP address
$localIP = $null
try {
    $localIP = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" } | Select-Object -First 1).IPAddress
} catch {}

try {
    $listener.Start()
    Write-Host ""
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host "   NEXGEN CHEMICALS LOCAL WEB SERVER (PowerShell)" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host " Serving Files From : $((Get-Item .).FullName)" -ForegroundColor Gray
    Write-Host " Listening At       : http://localhost:$port/" -ForegroundColor Cyan
    if ($localIP) {
        Write-Host " Mobile Wi-Fi Link  : http://${localIP}:$port/" -ForegroundColor Cyan
    }
    Write-Host " Press [Ctrl + C] to terminate this server session" -ForegroundColor Yellow
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host ""

    # Open index in browser after startup
    Start-Process "http://localhost:$port/index.html"

    while ($true) {
        if (-not $listener.Pending()) {
            Start-Sleep -Milliseconds 10
            continue
        }

        try {
            $client = $listener.AcceptTcpClient()
            # Set timeouts to prevent hanging on slow clients
            $client.ReceiveTimeout = 1000
            $client.SendTimeout = 2000
            $stream = $client.GetStream()
            
            # Wait for data to become available (max 50ms) to avoid blocking on speculative connections
            $delay = 0
            while (-not $stream.DataAvailable -and $delay -lt 50) {
                Start-Sleep -Milliseconds 5
                $delay += 5
            }
            
            if (-not $stream.DataAvailable) {
                $stream.Close()
                $client.Close()
                continue
            }
            
            # Read request
            $buffer = New-Object System.Byte[] 4096
            $bytesRead = $stream.Read($buffer, 0, $buffer.Length)
            if ($bytesRead -eq 0) {
                $stream.Close()
                $client.Close()
                continue
            }
            
            $requestStr = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $bytesRead)
            $lines = $requestStr -split "`r`n"
            if ($lines.Length -lt 1) {
                $stream.Close()
                $client.Close()
                continue
            }
            
            $firstLine = $lines[0]
            $parts = $firstLine -split " "
            if ($parts.Length -lt 2) {
                $stream.Close()
                $client.Close()
                continue
            }
            
            $method = $parts[0]
            $url = $parts[1]
            
            # Simple routing
            if ($url -eq "/") {
                $url = "/index.html"
            }
            
            # Decode URL
            try {
                $url = [Uri]::UnescapeDataString($url)
            } catch {
                # Fallback
            }
            
            # Strip query string
            $qIndex = $url.IndexOf('?')
            if ($qIndex -ne -1) {
                $url = $url.Substring(0, $qIndex)
            }
            
            $relativePath = $url.TrimStart('/').Replace('/', '\')
            $filePath = Join-Path (Get-Item .).FullName $relativePath
            
            if (Test-Path $filePath -PathType Leaf) {
                try {
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    
                    # MIME Types
                    $contentType = "application/octet-stream"
                    if ($ext -eq ".html" -or $ext -eq ".htm") { $contentType = "text/html; charset=utf-8" }
                    elseif ($ext -eq ".css") { $contentType = "text/css; charset=utf-8" }
                    elseif ($ext -eq ".js") { $contentType = "application/javascript; charset=utf-8" }
                    elseif ($ext -eq ".png") { $contentType = "image/png" }
                    elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
                    elseif ($ext -eq ".gif") { $contentType = "image/gif" }
                    elseif ($ext -eq ".svg") { $contentType = "image/svg+xml" }
                    elseif ($ext -eq ".json") { $contentType = "application/json; charset=utf-8" }
                    elseif ($ext -eq ".mp4") { $contentType = "video/mp4" }
                    elseif ($ext -eq ".webm") { $contentType = "video/webm" }
                    
                    $header = "HTTP/1.1 200 OK`r`n" +
                              "Content-Type: $contentType`r`n" +
                              "Content-Length: $($bytes.Length)`r`n" +
                              "Cache-Control: no-store, no-cache, must-revalidate`r`n" +
                              "Connection: close`r`n`r`n"
                    
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                }
                catch {
                    try {
                        $errMsg = "HTTP/1.1 500 Internal Error`r`nContent-Type: text/plain`r`nConnection: close`r`n`r`n500 Server Error: $_"
                        $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errMsg)
                        $stream.Write($errBytes, 0, $errBytes.Length)
                    } catch {}
                }
            }
            else {
                try {
                    $notFound = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nConnection: close`r`n`r`n404 File Not Found: $url"
                    $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes($notFound)
                    $stream.Write($notFoundBytes, 0, $notFoundBytes.Length)
                } catch {}
            }
            
            $stream.Close()
            $client.Close()
        }
        catch {
            # Log connection error without crashing the main loop
            Write-Host "Connection error handled: $_" -ForegroundColor DarkYellow
            if ($client) {
                try { $client.Close() } catch {}
            }
        }
    }
}
catch {
    Write-Host "Error occurred: $_" -ForegroundColor Red
}
finally {
    if ($listener) {
        $listener.Stop()
    }
}
