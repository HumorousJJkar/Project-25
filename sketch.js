
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball, ground1;

var BinPiece1, BinPiece2, BinPiece3;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(width/2,650,width,20);
	BinPiece1 = new Dustbin(1200,630,200,20);
	BinPiece2 = new Dustbin(1200,550,20,100);
	BinPiece3 = new Dustbin(1380,550,20,100);
	paperball = new Paper(125,560,70);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  ground1.display();
  BinPiece1.display();
  BinPiece2.display();
  BinPiece3.display();
  paperball.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:860,y:-865});

	}

}

