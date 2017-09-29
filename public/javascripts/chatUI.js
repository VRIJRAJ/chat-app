const Chat = require('./chat.js');

function ChatUI (socket) {
  this.chat = new Chat(socket);
  this.form = document.querySelector('form');
  this.msgList = document.querySelector('ul#msg-list');
  this.roomList = document.querySelector('ul#room-list');
  this.input = document.querySelector('input');
  this.room = document.querySelector('#room');
  this.submitHandler();
};

ChatUI.prototype.getInput = function() {
  return this.input.value;
};

ChatUI.prototype.sendMsg = function() {
  this.chat.sendMsg(this.getInput());
}

ChatUI.prototype.setRoom = function(room) {
  this.room.textContent = room;
}

ChatUI.prototype.addMsg = function(msg) {
  let newMsg = document.createElement('li');
  newMsg.textContent = msg;
  this.msgList.appendChild(newMsg);
};

ChatUI.prototype.addRoom = function(room) {
  const newRoom = document.createElement('li');
  newRoom.textContent = room;
  this.roomList.appendChild(newRoom);
}

ChatUI.prototype.processInput = function() {
  const msg = this.getInput();
  let response;

  if (msg[0] === '/') {
    response = this.chat.processCommand(msg);
    if (response) {
      this.addMsg(response);
    }
  } else {
    this.sendMsg(this.room.textContent);
    this.addMsg(msg);
  }
}

ChatUI.prototype.submitHandler = function() {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    this.processInput();
    this.input.value = '';
  });
}

module.exports = ChatUI;