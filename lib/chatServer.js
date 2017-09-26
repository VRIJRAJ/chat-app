const chatServer = {
  listen: function(httpServer) {
    require('socket.io')(httpServer, {
      path: '/test',
      serveClient: false,
      // below are engine.IO options
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false
    })
  }
};

module.exports = chatServer;