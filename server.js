const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const HOST = process.env.HOST || '127.0.0.1';
const ROOT = path.resolve(__dirname);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.map': 'application/octet-stream'
};

function safeJoin(root, p) {
  const resolved = path.resolve(root, p);
  if (!resolved.startsWith(root)) return root; // prevent path traversal
  return resolved;
}

function send(res, code, data, headers={}) {
  res.writeHead(code, Object.assign({ 'Cache-Control': 'no-cache' }, headers));
  res.end(data);
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let pathname = decodeURIComponent(parsed.pathname || '/');
  if (pathname === '/') pathname = '/index.html';
  const filePath = safeJoin(ROOT, pathname.replace(/^[\/]+/, ''));

  fs.stat(filePath, (err, stat) => {
    if (err || !stat || !stat.isFile()) {
      return send(res, 404, 'Not Found', { 'Content-Type': 'text/plain; charset=utf-8' });
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = TYPES[ext] || 'application/octet-stream';
    fs.createReadStream(filePath).on('error', () => {
      send(res, 500, 'Server Error', { 'Content-Type': 'text/plain; charset=utf-8' });
    }).pipe(res);
    res.setHeader('Content-Type', type);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Preview running at http://${HOST}:${PORT}/`);
});
