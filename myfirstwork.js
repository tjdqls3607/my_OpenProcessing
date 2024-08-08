function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
background(255);
ellipseMode(CENTER);
rectMode(CENTER); 

//circle
fill(255);
ellipse(50,50,60,60);

//filled circle
fill(0);
ellipse(150,50,60,60);

//triangle
stroke(0);
fill(255);
triangle(250,25,300,100,200,100);

//red filled triangle
stroke(0);
fill(255,0,0);
triangle(400,25,450,100,350,100);

// square
stroke (0);
fill(255);
rect(550,75,100,100);

//filled square
stroke (0);
fill(0,255,0);
rect(700,75,100,100);
print(1);

// slash
line(50,150,100,250);
strokeWeight(8);

point(10,10);
point(630,350);

//half circle
arc(200,200,100,100,radians(0),radians(180));
}
//object
void mouseIsPressed(); {
  fill(175);
  rectMode(CENTER);
  rect(mouseX, mouseY, 16, 16);
}

// Whenever a user presses a key the code written inside keyPressed() is executed.
void keyPressed(); {
  background(255);
}

