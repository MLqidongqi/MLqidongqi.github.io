// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// 静态文件服务，如果您想从同一服务器提供静态文件
app.use(express.static(__dirname + '/../public'));

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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
});
