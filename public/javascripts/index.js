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

  socket.on('rooms', rooms => {
    myChat.roomList.innerHTML = '';
    rooms.forEach(room => myChat.addRoom(room));
    myChat.roomList.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', e => {
        myChat.chat.processCommand(`/join ${li.textContent}`);
        myChat.input.focus();
      });
    });
  });

  setInterval(() => {
    socket.emit('rooms');
  }, 1000);

  myChat.input.focus();
});