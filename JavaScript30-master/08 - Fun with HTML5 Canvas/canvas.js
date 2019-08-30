const canvas = document.querySelector("#draw");
const canvasContext = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvasContext.strokeStyle = "#BADA55";
canvasContext.lineJoin = "round";
canvasContext.lineCap = "round";
canvasContext.lineWidth = 50;
canvasContext.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = function(e) {
  if (!isDrawing) return;
  console.log(e);
  canvasContext.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  canvasContext.beginPath();
  canvasContext.moveTo(lastX, lastY);
  canvasContext.lineTo(e.offsetX, e.offsetY);
  canvasContext.stroke();
  //   lastX = e.offsetX
  //   lastY = e.offsetY

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) hue = 0;

  if (canvasContext.lineWidth >= 100 || canvasContext.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    canvasContext.lineWidth++;
  } else {
    canvasContext.lineWidth--;
  }
};

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
