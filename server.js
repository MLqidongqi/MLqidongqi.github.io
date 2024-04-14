const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let players = [];

io.on('connection', (socket) => {
  console.log('玩家已连接', socket.id);

  socket.on('playerMove', (player) => {
    player.id = socket.id;
    let existingPlayer = players.find(p => p.id === player.id);
    if (existingPlayer) {
      existingPlayer.x = player.x;
      existingPlayer.y = player.y;
    } else {
      players.push(player);
    }
    io.emit('playerUpdate', players);
  });

  socket.on('disconnect', () => {
    players = players.filter(p => p.id !== socket.id);
    io.emit('playerUpdate', players);
  });
});

server.listen(3000, () => {
  console.log('服务器正在运行');
});
