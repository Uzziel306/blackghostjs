const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT | 3012;
const api = require('./api');
const keyLogger = require('./tools/keyLogger');

server.listen(port);

keyLogger.start();

app.use(api);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});