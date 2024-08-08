let spacing = 50;

function setup() {
  createCanvas(1024,1024);
  noLoop();
  }
  
function draw() {
  background(40,28,100);
  
  noFill();
  //ellipse(width/2, height/2, 100, 100);
  
  //nested for loop; 2-d for loop;
  for (let y = 0; y <= height; y += spacing){
    for (let x = 0; x <= width; x += spacing){
      strokeWeight( random(1, 4) );
      stroke(random(255), random(180,255), random(0,150));
      
      mx = map(mouseX, 0, width, 5, 130);  
      if ( y % (spacing*2) == 0  ){
      ellipse(x, y, mx, mx);
      } else {
        ellipse(x + spacing/2, y, mx, mx);
      }
    }
  }
}

function mouseMoved() {
  redraw();
}
