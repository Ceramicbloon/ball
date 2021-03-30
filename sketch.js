
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(200, 200, 15)

	//Engine.run(engine);
		
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ball1.display()
  drawSprites();
 
}



