import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8085;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const server = http.createServer((req, res) => {
  // Decode URL to handle spaces and special characters
  let safeUrl = decodeURIComponent(req.url);
  
  // Strip query strings or hash parameters
  const qIndex = safeUrl.indexOf('?');
  if (qIndex !== -1) {
    safeUrl = safeUrl.substring(0, qIndex);
  }
  
  let filePath = path.join(PUBLIC_DIR, safeUrl);
  
  // If request is a directory, serve index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Get extension
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`404 File Not Found: ${safeUrl}`);
        console.log(`[404] ${req.method} ${safeUrl}`);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`500 Server Error: ${err.code}`);
        console.log(`[500] ${req.method} ${safeUrl} - ${err.code}`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content, 'utf-8');
      console.log(`[200] ${req.method} ${safeUrl}`);
    }
  });
});

server.listen(PORT, () => {
  console.log('==================================================');
  console.log('   NEXGEN CHEMICALS LOCAL WEB SERVER (Node.js)');
  console.log('==================================================');
  console.log(` Serving Files From : ${PUBLIC_DIR}`);
  console.log(` Listening At       : http://localhost:${PORT}/`);
  console.log('==================================================');
});
