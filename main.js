const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
  x: 300,
  y: 160,
  size: 20,
  speed: 2
};

const keys = {};

document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

function update() {
  if (keys["ArrowUp"] || keys["w"]) player.y -= player.speed;
  if (keys["ArrowDown"] || keys["s"]) player.y += player.speed;
  if (keys["ArrowLeft"] || keys["a"]) player.x -= player.speed;
  if (keys["ArrowRight"] || keys["d"]) player.x += player.speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffcc";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
