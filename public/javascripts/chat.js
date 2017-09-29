function Chat (socket) {
  this.socket = socket;
};

Chat.prototype.sendMsg = function(msg) {
  this.socket.emit('message', {
    text: msg
  });
};

Chat.prototype.changeRoom = function(room) {
  this.socket.emit('join', { newRoom: room });
};

Chat.prototype.process = function(command) {
  const words = command.split(' ');
  const parsed = words[0].substring(1, words[0].length).toLowerCase();
  let msg = false;

  switch (parsed) {
    case 'join':
      words.shift();
      const room = words.join(' ');
      this.changeRoom(room);
      break;
    default:
      msg = 'Unrecognized command.';
      break;
  }

  return msg;
};

module.exports = Chat;