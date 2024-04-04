const express = require('express');
const multer = require('multer');
const app = express();

// 配置视频存储
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// 视频上传路由
app.post('/upload', upload.single('videoFile'), (req, res) => {
    if (req.file) {
        // 视频文件上传成功
        // 存储视频文件并返回上传信息
        res.send({ message: '视频上传成功', file: req.file });
    } else {
        res.status(400).send({ message: '没有上传文件' });
    }
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
