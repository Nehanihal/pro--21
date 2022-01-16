var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground 
var ground1
var ground2
var Radius
function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);
	engine = Engine.create();
	world = engine.world;


	var ball_options={
	isStatic:false,
	restitution:0.3,
    friction:0,
	density:1.2
}

	

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(Radius)
}


function draw() {
  
  
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
  
 groundObj.display()
  groundObj=new ground(width/2,670,width,20)
  leftside=new ground(1100,600,20,120)
  
  function keyPressed(){
	  if(keyCode === UP_ARROW) {
function hForce() 
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
}
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

 }
  }
  drawSprites();
 
}



