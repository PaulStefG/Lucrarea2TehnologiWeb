const canvas = document.getElementById("sinusoid");
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const gridSize = 20;
ctx.lineWidth = 1;

let amplitude = 100;
let frequency = 0.02;
var func = 0;

var a = document.getElementById("rA");
var slideAmp = document.getElementById("AmpSlider");
a.innerHTML = slideAmp.value;
slideAmp.oninput = function (){
  amplitude = this.value;
  a.innerHTML = this.value;
  drawSinusoid();
}

var f = document.getElementById("rF");
var slideFre = document.getElementById("FreSlider");
f.innerHTML = slideFre.value;
slideFre.oninput = function () {
  frequency = this.value;
  f.innerHTML = this.value;
  drawSinusoid();
}

function frst(){
  func=0;
}
function secnd() {
  func=1;
}

ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;

function drawMidline() {
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  const midY = height / 2;
  ctx.beginPath();
  ctx.moveTo(20, midY);
  ctx.lineTo(width, midY);
  ctx.stroke();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
}
function drawGrid() {
  ctx.strokeStyle = 'lightgray';
  ctx.beginPath();

  // Desenăm liniile verticale și adăugăm numerele pe axa x
  for (let x = gridSize; x < width; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);

    // Adăugăm numerele pe axa x
    ctx.font = '10px Arial';
    ctx.fillText(x, x, height - 5);
  }

  // Desenăm liniile orizontale și adăugăm numerele pe axa y
  for (let y = gridSize; y < height; y += gridSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);

    // Adăugăm numerele pe axa y
    ctx.font = '10px Arial';
    ctx.fillText(300 - y, 0, y);
  }

  ctx.stroke();
}

function drawSinusoid() {
  ctx.clearRect(0, 0, width, height);

  // Desenăm grid
  drawGrid();
  drawMidline();
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  for (let x = 20; x < width; x++) {
    const t = (x / gridSize) * frequency; // Scala t și frecvența
    let y;

    const selectedFormula = document.querySelector('input[name="formula"]:checked').value;

    if (selectedFormula === "1") {
      y = amplitude * (Math.sin(t) + Math.cos(Math.sqrt(3) * t)) + height / 2;
    } else if (selectedFormula === "2") {
      y = amplitude * Math.sin(2 * Math.PI * t) + height / 2;
    } else if (selectedFormula === "3") {
      // Adaugă formula pentru semnalul sinusoidal pătrat centrat pe mijloc
      const period = 2 * Math.PI / frequency;
      const halfAmplitude = amplitude / 2;

      if ((t % period) < period / 2) {
        y = halfAmplitude + height / 2;
      } else {
        y = -halfAmplitude + height / 2;
      }
    }

    ctx.lineTo(x, y);
  }
  ctx.stroke();
}
drawSinusoid();

