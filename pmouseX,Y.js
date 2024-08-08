 function setup() {
  createCanvas(800, 600);
  ellipseMode(CENTER);
}

function draw() {
  stroke((int)(random(255)), (int)(random(255)), (int)(random(255)));
  strokeWeight(2); //선 굵기 
  line(pmouseX, pmouseY, mouseX, mouseY);
  print(frameCount,frameRate);
}
