
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var ground;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var boyImage;
var stone;
var rope;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(700,690,1400,10);
	
	tree = new Tree(1050,680);

	mango1 = new Mango(1100,150,30);
	mango2 = new Mango(1000,200,30);
	mango3 = new Mango(900,350,30);
	mango4 = new Mango(1100,275,30);
	mango5 = new Mango(1200,220,30);
	mango6 = new Mango(1250,350,30);
	mango7 = new Mango(1000,370,30);
	mango8 = new Mango(1150,360,30);
	//mango9 = new Mango(500,500,30);

	stone = new Stone(235,500,30);
	rope = new Rope(stone.body,{x:235,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  textSize(25);
  fill("blue")
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boyImage ,200,450,200,300);

  ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  //mango9.display();

  stone.display();
  rope.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  //detectCollision(stone,mango9);

   
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:520}) 
		rope.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){
	
  var mangoBodyPosition=lmango.body.position;
  var stoneBodyPosition=lstone.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  console.log(distance);
  console.log(lmango.radius+lstone.radius)
 
  	if(distance<=lmango.radius+lstone.radius)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }