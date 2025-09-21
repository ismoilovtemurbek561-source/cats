const cat = document.getElementById('cat');
const coin = document.getElementById('coin');
const scoreDisplay = document.getElementById('score');

let catX = 100;
let catY = 100;
let score = 0;
const moveStep = 20;
const game = document.getElementById('game');
const gameWidth = game.clientWidth;
const gameHeight = game.clientHeight;

function placeCoinRandomly() {
  const x = Math.floor(Math.random() * (gameWidth - 30));
  const y = Math.floor(Math.random() * (gameHeight - 30));
  coin.style.left = x + 'px';
  coin.style.top = y + 'px';
}

function checkCollision() {
  const catRect = cat.getBoundingClientRect();
  const coinRect = coin.getBoundingClientRect();

  if (
    catRect.left < coinRect.right &&
    catRect.right > coinRect.left &&
    catRect.top < coinRect.bottom &&
    catRect.bottom > coinRect.top
  ) {
    score++;
    scoreDisplay.textContent = score;
    placeCoinRandomly();
  }
}

function move(direction) {
  if (direction === 'up') catY -= moveStep;
  else if (direction === 'down') catY += moveStep;
  else if (direction === 'left') catX -= moveStep;
  else if (direction === 'right') catX += moveStep;

  catX = Math.max(0, Math.min(catX, gameWidth - 50));
  catY = Math.max(0, Math.min(catY, gameHeight - 50));

  cat.style.left = catX + 'px';
  cat.style.top = catY + 'px';

  checkCollision();
}

// Klaviatura tugmalar
document.addEventListener('keydown', (e) => {
  if (e.key === 'w') move('up');
  else if (e.key === 's') move('down');
  else if (e.key === 'a') move('left');
  else if (e.key === 'd') move('right');
});

placeCoinRandomly();
