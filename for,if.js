function setup() {
  createCanvas(800, 600);
  ellipseMode(CENTER);
}

function draw() {
  let i,n,a,b;
  background(255);
  stroke(0);
  strokeWeight(2); //선 굵기
  if(mouseX>2){
    n = width/mouseX;
    for(i=0; i<n; i++){
      line(i*mouseX, 0, i*mouseX, height);
    }
  }
  if(mouseY>2){
    b=height/mouseY;
    for(a=0; a<b; a++){
      line(0,a*mouseY,width,a*mouseY);
    }
  }
      
  print(frameCount,frameRate);
}
