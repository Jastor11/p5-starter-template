
// The setup function runs once
function setup() {
  
  createCanvas(800, 600);
  stroke(0); 
  fill(150);
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
  background(0);
  rect(50,50,75,100);

  var c = color(255, 204, 0);  // Define color 'c'
  fill(c);  // Use color variable 'c' as fill color
  noStroke();  // Don't draw a stroke around shapes
  rect(30, 20, 55, 55);  // Draw rectangle
}
