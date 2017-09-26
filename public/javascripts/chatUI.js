const Chat = require('./chat.js');

const ChatUI = function(socket) {
  this.chat = new Chat(socket);

  this.form = document.querySelector('form');
  this.msgList = document.querySelector('#msg-list');

  this.form.addEventListener('submit', this.processInput);
};

ChatUI.prototype.processInput = function(e) {
  e.preventDefault();
  const msg = e.target.querySelector('input').value;
  
  this.emitMessages(msg);
};

ChatUI.prototype.getInput = function() {
  this.form.querySelector('input').value;
};

ChatUI.prototype.emitMessages = function(msg) {
  this.chat.sendMsg(msg);
};

ChatUI.prototype.addMessage = function(msg) {
  console.log(msg);
  let li = document.createElement('li');
  li.value = msg;
  msgList.appendChild(li);
};

module.exports = ChatUI;