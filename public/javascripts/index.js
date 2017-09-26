document.addEventListener('DOMContentLoaded', () => {
  const io = require('socket.io-client')();
  const chatUI = require('./chatUI');

  const myChat = new myChatUI(io);
  io.on('message', (msg) => {
    myChat.addMessage(msg);
  })
})