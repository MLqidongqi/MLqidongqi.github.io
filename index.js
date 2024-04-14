document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const playerName = document.getElementById('playerName').value;
  if (playerName.trim() === '') {
    alert('Please enter a name to play.');
    return;
  }
  localStorage.setItem('playerName', playerName);
  window.location.href = 'game.html';
});
