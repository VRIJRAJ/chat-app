const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

const chatServer = require('./lib/chatServer.js');
chatServer.listen(http);

const PORT = 3000

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

http.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
