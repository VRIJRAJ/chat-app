function Chat (socket) {
  this.socket = socket;
}

Chat.prototype.sendMsg = function(msg) {
  this.socket.emit('message', {
    text: msg
  });
}

module.exports = Chat;