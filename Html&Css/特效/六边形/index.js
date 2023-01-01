const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const hexs = [];
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};
canvas.addEventListener("mousemove", (e) => {
  console.log(e);
  mouse.x = e.x;
  mouse.y = e.y;
});
const maxSize = Math.sqrt(
  Math.pow(canvas.height, 2) + Math.pow(canvas.width, 2)
);
class hex {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.size = 38;
  }
  update() {
    const hsl = Math.atan2(mouse.y - this.y, mouse.x - this.x);
    this.color = "hsla(" + (hsl / Math.PI) * 180 + ",90%,40%,0.5)";
    const r = Math.sqrt(
      Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)
    );
    this.size = (1 - r / maxSize) * 38;
  }
  draw() {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const x = this.size * Math.cos((i * Math.PI) / 3) + this.x;
      const y = this.size * Math.sin((i * Math.PI) / 3) + this.y;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }
}

function init() {
  for (let i = 0; i < canvas.width / 120 + 1; i++) {
    for (let j = 0; j < canvas.height / Math.sqrt(1200) + 1; j++) {
      hexs.push(new hex(i * 120 + (j % 2) * 60, j * Math.sqrt(1200)));
    }
  }
}

init();
function ani() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i in hexs) {
    let h = hexs[i];
    h.update();
    h.draw();
  }
}
setInterval(() => {
  ani();
}, 100 / 6);
