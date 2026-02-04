const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

const mimeTypes = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon'
};

const server = http.createServer((req, res) => {
  const safeUrl = decodeURIComponent(req.url.split('?')[0]);
  let requested = safeUrl === '/' ? '/index.html' : safeUrl;
  const filePath = path.join(publicDir, requested);

  if (!filePath.startsWith(publicDir)) {
	res.statusCode = 400;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Bad Request');
	return;
  }

  fs.stat(filePath, (err, stats) => {
	if (err || !stats.isFile()) {
	  res.statusCode = 404;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Not found');
	  return;
	}

	const ext = path.extname(filePath).toLowerCase();
	res.statusCode = 200;
	res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
	const stream = fs.createReadStream(filePath);
	stream.on('error', () => {
	  res.statusCode = 500;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Server error');
	});
	stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
