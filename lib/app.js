const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

const chatServer = require('./chatServer.js');
chatServer.listen(http);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

http.listen(3000, function() {
  console.log('Now listening!');
});
