document.addEventListener('DOMContentLoaded', () => {
  const io = require('socket.io-client')();
  const chatUI = require('./chatUI');

  const chat = new chatUI(io);
  io.on('message', (msg) => {
    chat.addMessage(msg);
  })
})