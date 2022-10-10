const { inherits } = require('util');
const utils = require('./utils');

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
});

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init() 
});

function lightParticle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05; //speed particle moves
    this.distanceFromCenter = utils.randomIntFromRange(0, 120);

    this.update = () => {
      const lastPoint = {x: this.x, y: this.y};
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * 
          this.distanceFromCenter;
      this.y = y + Math.sin(this.radians) * 
          this.distanceFromCenter;
      this.draw(lastPoint);
    };

    this.draw = lastPoint => {
      context.beginPath();
      context.strokeStyle = this.color;
      context.lineWidth = this.radius;
      context.moveTo(lastPoint.x, lastPoint.y);
      context.lineTo(this.x, this.y);
      context.stroke();
      context.closePath();
    }

};

let particles;
function init() {
    particles = [];

    for (let i = 0; i < 600; i++) {
        const radius = (Math.random() * 2) + 1;
        particles.push(new lightParticle(canvas.width / 2,
            canvas.height / 2, radius, utils.randomColor(utils.colors)));
    }
};

function animate() {
  requestAnimationFrame(animate);
  context.fillStyle = 'rgba(0, 0, 0, 0.09)';
  context.fillRect(0, 0, canvas.width, canvas.height);


  particles.forEach(particle => {
      particle.update();
  });
};



init();
animate();