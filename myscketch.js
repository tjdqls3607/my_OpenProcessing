function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
 // Set CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER); 
  background(255);
  // Body
  stroke(0);
  fill(150);
  rect(mouseX, mouseY+30, 20, 100);

  // Head
  fill(255);
  //ellipse(240, 115, 60, 60); 
  ellipse(mouseX, mouseY, 60, 60); 
  
  // Eyes
  fill(0); 
  ellipse(mouseX-19, mouseY, 16, 32); 
  ellipse(mouseX+19, mouseY, 16, 32);

  // Legs
  stroke(0);
  line(mouseX+10, mouseY+80, mouseX+30, mouseY+100);
  line(mouseX-10, mouseY+80, mouseX-30, mouseY+100);
 
  print(1);
  
}
