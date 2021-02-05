
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var side1, side2, side3, side1Image;
var paper, paperImage;
function preload(){
  paperImage = loadImage("paper.png");
  side1Image = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 400);
  

	engine = Engine.create();
	world = engine.world;

	//Create one dustbin, 2 sides, one paper, one ground 
 







  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  side2.display();
  side3.display();
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
}

function keyPressed(){
// make paper fly




}



