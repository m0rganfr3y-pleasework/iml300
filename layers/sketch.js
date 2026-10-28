async function setup() {
  createCanvas(windowWidth, windowHeight);
  eye = await loadImage('assets/IMG_9418.png');
}

function draw() {
  background(0);
  fill(255);
  circle(windowWidth/2,windowHeight/2,windowWidth/2)
  imageMode(CENTER)
  let x = map(mouseX, 0, windowWidth, windowWidth/7*3, windowWidth/7*4);
  let y = map(mouseY, 0, windowHeight, windowHeight/7*3, windowHeight/7*4);
  image (eye,x,y);
}