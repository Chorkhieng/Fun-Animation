const ball = document.getElementById('ball');

function update() {
  const rect = ball.getBoundingClientRect();
  const x = rect.left;
  const y = rect.top;

  if (Math.random() < 0.5) {
    ball.style.animationDirection = 'normal';
  } else {
    ball.style.animationDirection = 'reverse';
  }

  if (Math.random() < 0.5) {
    ball.style.animationTimingFunction = 'ease-in';
  } else {
    ball.style.animationTimingFunction = 'ease-out';
  }

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
