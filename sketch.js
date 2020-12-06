
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (600,600,1200,20);
	tree = new 	Tree (120,600,30,100);
	rock = new Stone(200,200,30);
	boy = new Boy(100,200,20,30);

	slingShot = new Slingshot(rock.body,{x:150,y:80});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  slingShot.display();
  ground.display();
  rock.display();
  tree.display();
  drawSprites();
 
}



