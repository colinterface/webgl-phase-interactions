function setup() {
  createCanvas(800, 800, WEBGL);
}

var dragX = 0;
var dragY = 0;
var zoom = -100;
var rotationSpeed = 0.005;
var xRotation = 0;
var yRotation = 0;
var zRotation = 0;
var exponentialSpacing = false;


function draw() {
  if (!mouseIsPressed) {
    xRotation -= .001//xRotation / 100
    yRotation -= .003//yRotation / 100
    zRotation -= .005//zRotation / 100
  }
  background(0);
  camera(0, 0, zoom);
  for (var i = 1; i < 100; i++) {
    translate(0, 200 * exponentialSpacing ? i : 1);
    rotateY(xRotation);
    rotateX(yRotation);  
    rotateZ(zRotation);
    box(100, 100, 100);  
  }
  
}

function mousePressed() {
  dragX = mouseX;
  dragY = mouseY;
}

function mouseDragged() {
  xRotation += Math.cos(yRotation) * (mouseX - dragX) * rotationSpeed;
  dragX = mouseX;
  yRotation += Math.cos(xRotation) * (mouseY - dragY) * rotationSpeed;
  zRotation += Math.sin(xRotation) * (mouseY - dragY) * rotationSpeed;
  dragY = mouseY;
}

function mouseWheel(event) {
  zoom += event.delta * 3;
}

function keyPressed() {
  if (keyCode === 32) {
    console.log('xRotation:', xRotation, 'yRotation:', yRotation, 'zRotation: ', zRotation);
  }
  
  if (keyCode === SHIFT) {
    exponentialSpacing = !exponentialSpacing;
  }
}
