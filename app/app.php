// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('一个用户连接了');

    socket.on('new message', (message) => {
        // 广播消息给所有客户端
        io.emit('receive message', message);
    });

    socket.on('disconnect', () => {
        console.log('一个用户断开了连接');
    });
});

server.listen(3000, () => {
    console.log('服务器运行在端口 3000');
});
