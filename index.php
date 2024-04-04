<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>视频上传网站</title>
</head>
<body>
    <h1>视频上传</h1>
    <form id="videoUploadForm">
        <input type="file" id="videoFile" accept="video/*">
        <button type="submit">上传视频</button>
    </form>

    <h2>视频列表</h2>
    <div id="videoList">
        <!-- 视频列表将在这里动态生成 -->
    </div>

    <h2>视频播放器</h2>
    <video id="videoPlayer" controls width="640" height="360">
        您的浏览器不支持视频标签。
    </video>

    <script>
        document.getElementById('videoUploadForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const videoFile = document.getElementById('videoFile').files[0];
            if (videoFile) {
                // 这里应该是上传视频文件的逻辑
                console.log('上传视频文件:', videoFile);
                // 上传成功后，可以将视频信息添加到视频列表中
            }
        });
    </script>
</body>
</html>
