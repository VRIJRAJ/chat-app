const io = require('socket.io');

const chatServer = {
  listen: function(httpServer) {
    const io = require('socket.io')(httpServer);

    io.on('connection', function(socket){
      console.log('a user connected');
    });

    return io;
  }
};

module.exports = chatServer;