document.addEventListener('DOMContentLoaded', () => {
  const socket = require('socket.io-client')();
  const chatUI = require('./chatUI');
  const myChat = new chatUI(socket);

  socket.on('message', (msg) => {
    myChat.addMsg(msg.text);
  });

  socket.on('joinResult', result => {
    myChat.setRoom(result.room);
    myChat.addMsg('Room changed.');
  });


});