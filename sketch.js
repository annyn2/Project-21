
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density: 1.2
  
}

ball=Bodies.circle(260,100,radius/2,ball_options);
World.add(world,ball);

groundObj=new ground(width/2,670,width,20)
leftSide=new ground(1100,600,20,120)
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}