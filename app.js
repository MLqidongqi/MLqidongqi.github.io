const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// 连接到MongoDB
mongoose.connect('mongodb://localhost/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

// 创建文章模型
const Post = mongoose.model('Post', {
  title: String,
  content: String
});

// 使用Body-parser中间件
app.use(bodyParser.urlencoded({ extended: true }));

// 设置视图引擎为EJS
app.set('view engine', 'ejs');

// 首页，显示所有文章
app.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.render('index', { posts: posts });
  });
});

// 创建新文章
app.post('/create', (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content
  });
  newPost.save((err) => {
    if (!err) {
      res.redirect('/');
    }
  });
});

// 服务器监听3000端口
app.listen(3000, () => {
  console.log('博客应用正在运行在 http://localhost:3000');
});
