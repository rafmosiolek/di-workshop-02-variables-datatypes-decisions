var position = 0;
var vector = 1;



function setup() {
  createCanvas(400, 200)
}

function draw() {
  background(100)

  position = position + vector;
  if (position == 390 || position == 0) {
    vector = -vector;
  }
  rect(position, 0, 10, 10)

  rect(0, 0, 10, 30)
}
