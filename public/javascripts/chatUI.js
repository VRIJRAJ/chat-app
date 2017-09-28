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

ChatUI.prototype.addMsg = function(msg) {
  let newMsg = document.createElement('li');
  newMsg.textContent = msg;
  this.msgList.appendChild(newMsg);
};

module.exports = ChatUI;