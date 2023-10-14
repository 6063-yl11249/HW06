class WavyText {
  constructor(text, font, size, color) {
    this.text = text;
    this.font = font;
    this.size = size;
    this.color = color;
    this.wordPoints = [];
  }

  setup() {
    this.wordPoints = this.font.textToPoints(this.text, 0, 0, this.size, {
      sampleFactor: 1,
    });
    noFill();
    stroke(this.color);
  }

  draw() {
    background('orange');
    let randMax = map(mouseX, 0, width, 0, 16);
    translate((width - textWidth(this.text)) / 2, (height + this.size) / 2);

    beginShape();
    for (let i = 0; i < this.wordPoints.length; i++) {
      let p = this.wordPoints[i];
      let rx = random(-randMax, randMax);
      let ry = random(-randMax, randMax);
      vertex(p.x + rx, p.y + ry);
    }
    endShape();
  }
}

// Usage
let tFont;
let bFont;

function preload() {
  tFont = loadFont("./Excalibur Nouveau.ttf");
  bFont = loadFont("./Alstoria Demo.ttf");
}

let wavyText;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(120);
  wavyText = new WavyText("Halloween Party", tFont, 120, 'purple');
  wavyText.setup();


}

function draw() {
  wavyText.draw();
}
