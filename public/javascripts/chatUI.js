const Chat = require('./chat.js');

class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket);

    this.messages = document.getElementById('msg-list');
    this.input = document.getElementById('msg-input');
    this.txt = '';
  }

  getInput() {
    this.txt = this.input.value
  }

  emitMessages(message) {
    this.chat.sendMessage(this.txt);
  }

  addMessage(message) {
    let li = document.createElement('li');
    li.value = message;
    messages.appendChild(li);
  }
}