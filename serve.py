import http.server
import socketserver
import webbrowser
import threading
import os
import sys

PORT = 8085

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def open_browser():
    print(f"\nOpening browser to http://localhost:{PORT}/index.html ...")
    webbrowser.open(f"http://localhost:{PORT}/index.html")

if __name__ == "__main__":
    # Navigate to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    if script_dir:
        os.chdir(script_dir)
    
    # Run server
    handler = MyHTTPRequestHandler
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            print(f"==================================================")
            print(f" NexGen Chemicals Local Development Server")
            print(f" Serving from: {os.getcwd()}")
            print(f" Running at: http://localhost:{PORT}/")
            print(f" Press Ctrl+C to stop the server")
            print(f"==================================================")
            
            # Start timer to launch browser once server initializes
            threading.Timer(1.2, open_browser).start()
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\nStopping server. Goodbye!")
        sys.exit(0)
    except Exception as e:
        print(f"\nError launching server: {e}")
        sys.exit(1)
