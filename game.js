const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const socket = io('http://localhost:3000');

let player = {
  x: 100,
  y: 100,
  name: 'Player'
};

function drawPlayer(p) {
  ctx.fillStyle = 'blue';
  ctx.fillRect(p.x, p.y, 50, 50);
  ctx.fillStyle = 'black';
  ctx.fillText(p.name, p.x + 10, p.y + 20);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer(player);
  requestAnimationFrame(gameLoop);
}

gameLoop();

socket.on('playerUpdate', (players) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of players) {
    drawPlayer(p);
  }
});

canvas.addEventListener('mousemove', (e) => {
  player.x = e.clientX - 25;
  player.y = e.clientY - 25;
  socket.emit('playerMove', player);
});
