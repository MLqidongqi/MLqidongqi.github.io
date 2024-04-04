const express = require('express');
const app = express();
const port = 3000;

// 设置中间件以解析JSON
app.use(express.json());

// 存储昵称和消息
const nicknames = [];
const messages = [];

// 发送消息
app.post('/setNickname', (req, res) => {
    const { nickname } = req.body;
    if (!nickname.startsWith('ML')) {
        nicknames.push(nickname);
        res.status(200).send({ message: '昵称设置成功' });
    } else {
        res.status(400).send({ message: '昵称不能包含ML启动器' });
    }
});

// 发送消息
app.post('/sendMessage', (req, res) => {
    const { nickname, message } = req.body;
    if (nickname && message) {
        messages.push({ nickname, message });
        res.status(200).send({ message: '消息发送成功' });
    } else {
        res.status(400).send({ message: '请提供昵称和消息' });
    }
});

// 获取聊天记录
app.get('/getMessages', (req, res) => {
    res.status(200).send({ messages });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
