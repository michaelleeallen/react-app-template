const restify = require('restify');
const server = restify.createServer();
const IP = process.env.IP || '127.0.0.1';
const PORT = process.env.PORT || 3000;

server.get('/api', (req, res, next) => res.send('Hello, API!'));
server.listen(PORT, IP);
