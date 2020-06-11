var rainD;



function setup() {
  createCanvas(800,400);

  rainD = new RainD(400,390,50,50);

  
  
}

function draw() {

  background(255,255,255);  
  
  rainD.display();

  
}