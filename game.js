const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const socket = io('https://your-github-pages-url.github.io'); // Replace with your GitHub Pages URL

const playerName = localStorage.getItem('playerName');
if (!playerName) {
  window.location.href = 'index.html';
}

// Game logic and socket.io connection setup
// ...

socket.emit('joinGame', { name: playerName });
