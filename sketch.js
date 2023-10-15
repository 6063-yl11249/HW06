let phrase;
let bFont;
let selectedWords = [];

class WavyText {
  constructor(text, font, size, color, x, y) {
    this.text = text;
    this.font = font;
    this.size = size;
    this.color = color;
    this.x = x;
    this.y = y + textAscent();
    this.wordPoints = [];
  }

  setup() {
    this.wordPoints = this.font.textToPoints(
      this.text,
      this.x,
      this.y,
      this.size,
      {
        sampleFactor: 1,
      }
    );
    noFill();
    stroke(this.color);
  }

  draw() {
    textFont(this.font);
    textSize(this.size);

    let randMax = map(mouseX, 0, width, 16, 0);

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

function preload() {
  phrase = loadStrings("./Halloween.txt");
  bFont = loadFont("./Lato-Regular.ttf");
  wFont = loadFont("./Excalibur Nouveau.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let words = join(phrase, " ").split(" ");

  for (let i = 0; i < 9; i++) {
    let index = floor(random(words.length));
    selectedWords.push(words[index]);
  }
}

function draw() {
  background("red");
  textFont(bFont);
  textSize(68);
  textAlign(LEFT, TOP);

  let x = 80;
  let y = 40;
  let space = textWidth(" ");

  let words = join(phrase, " ").split(" ");

  for (let word of words) {
    if (selectedWords.includes(word)) {
      let wavyWord = new WavyText(word, wFont, 48, "black", x, y);
      wavyWord.setup();
      wavyWord.draw();
    } else {
      fill(255);
      noStroke();
      textFont(bFont);
      textSize(38);
      text(word, x, y);
    }

    x += textWidth(word) + space;
    if (x > width - 200) {
      x = 80;
      y += 90;
    }
  }
}
