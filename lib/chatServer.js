const io = require('socket.io');

const chatServer = {
  listen: function(httpServer) {
    const socket = require('socket.io')(httpServer, {
      path: '/test',
      serveClient: false,
      // below are engine.IO options
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false
    })

    socket.on('message', data => {
      io.emit('message', {
        text: 'this is the text'
      });
    })
  }
};

module.exports = chatServer;