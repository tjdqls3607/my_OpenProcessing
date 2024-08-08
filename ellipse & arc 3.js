function setup() {
  createCanvas(480, 270);
  ellipseMode(CENTER);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(1); //선 굵기 
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2 );
  fill(255,0,0);
  stroke(0,255,0); //선 색상바꾸기
  strokeWeight(5); 
  ellipse(width/2, height/2, 200, 200);
  fill(255,0,255);
  stroke(0,255,255); //선 색상바꾸기
  strokeWeight(5);
  arc(width/2, height/2, 200, 200, -PI/2, 2.0*mouseX/width*3.141592);//원주율과 비슷
}
