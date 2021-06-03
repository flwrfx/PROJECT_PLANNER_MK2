let paths = [];
var currentlyDrawing = false;

function setup() {
  createCanvas(710, 400);
  background(102);
//  canvas.mousePressed(startPath);
//  canvas.mouseReleased(endPath);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
  currentlyDrawing = true;
    line(mouseX, mouseY, pmouseX, pmouseY);
    var point = {
        x: pmouseX,
        y: pmouseY
    }//point
    paths.push(point);
  }//if

}

function mouseReleased(){
    currentlyDrawing = false;
}

//function startPath(){
//    current
//}//startPath
//
//function endPath(){
//
//}//endPath