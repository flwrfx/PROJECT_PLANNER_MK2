var saveButton;
var eraseButton;
var saveDrawing;
var loadDrawing;
var cnv;
function setup() {
  cnv = createCanvas(displayWidth/2, displayHeight/2);

  saveButton = createButton('SAVE CANVAS');
  saveButton.position(0, 0);
  saveButton.mousePressed(saveCanvas);

  eraseButton = createButton('ERASE CANVAS');
  eraseButton.position(saveButton.x + saveButton.width, 0);
  eraseButton.mousePressed(clear);

saveDrawing = createButton('SAVE DRAWING');
  saveDrawing.position(eraseButton.x + eraseButton.width, 0);
  saveDrawing.mousePressed(saveIt);

  strokeWeight(8);
  stroke(0);

loadDrawing = createButton('load DRAWING');
    loadDrawing.position(saveDrawing.x + saveDrawing.width, 0);
    loadDrawing.mousePressed(loadIt);

}//setup

/*
    https://www.youtube.com/watch?v=RUSvMxxm_Jo
*/

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function saveIt(){
    saveItem("myCanvas", cnv);

}

function loadIt(){
    getItem("myCanvas");
}