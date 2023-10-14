let mFont;
let mSize = 120;

let word = "Halloween Party";
let wordPoints;

function preload() {
  mFont = loadFont("./Excalibur Nouveau.ttf");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont(mFont);
  textSize(mSize);
  wordPoints = mFont.textToPoints(word, 0, 0, mSize, {
    sampleFactor: 1,
  });
  noFill();
  stroke('purple');
}

function draw() {
  background('orange');

  let randMax = map(mouseX, 0, width, 0, 16);
  translate((width - textWidth(word)) / 2, (height + mSize) / 2);

  beginShape();
  for (let i = 0; i < wordPoints.length; i++) {
    let p = wordPoints[i];
    let rx = random(-randMax, randMax);
    let ry = random(-randMax, randMax);
    vertex(p.x + rx, p.y + ry);
  }
  endShape();
}