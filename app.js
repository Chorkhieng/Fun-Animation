// Define animation parameters
const GRAVITY = 0.5;
const INITIAL_VELOCITY = -10;
const FLOOR_HEIGHT = 500;
const MAX_BOUNCE_HEIGHT = 200;

// Define ball properties
let ball = {
  velocity: INITIAL_VELOCITY + Math.random() * 10,
  bounceHeight: Math.random() * MAX_BOUNCE_HEIGHT,
  position: 0,
  direction: 1
};

// Start animation
let ballElement = document.getElementById("ball");

function animate() {
  // Update ball position
  ball.position += ball.velocity;
  ball.velocity += GRAVITY * ball.direction;

  if (ball.position > ball.bounceHeight && ball.direction === 1) {
    ball.velocity = -ball.velocity;
    ball.direction = -1;
  }

  if (ball.position > FLOOR_HEIGHT) {
    ball.position = FLOOR_HEIGHT;
    ball.velocity *= 0.8;
    ball.direction = 1;
  }

  ballElement.style.top = `${ball.position}px`;
  window.requestAnimationFrame(animate);
}

animate();
