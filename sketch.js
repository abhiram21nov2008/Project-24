var bar,dal,mal,ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
barSprite=createSprite(600,650,200,7)
barSprite.shapeColor=color("yellow")
dalSprite=createSprite(700,600,7,100)
dalSprite.shapeColor=color("yellow")
malSprite=createSprite(500,600,7,100)
malSprite.shapeColor=color("yellow")
ballSprite=createSprite(100,650,20,20)
ballSprite.shapeColor=color("red")
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



