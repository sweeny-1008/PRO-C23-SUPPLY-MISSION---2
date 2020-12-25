var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

      	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxPosition=width/2-100;
	boxY=610;

	var options={isStatic:true}

	 boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	 boxLeftSprite.shapeColor="red";
	 boxLeftBody=Bodies.rectangle(boxPosition, boxY, 20, 100,options);
	World.add(world,boxLeftBody);

	  boxBase=createSprite(boxPosition+100,boxY+40,200,20);
     boxBase.shapeColor="red";	  
	boxbaseBody=Bodies.rectangle(boxPosition+100,boxY+40,200,20,options);
	World.add(world,boxbaseBody);

	boxRightSprite=createSprite(boxPosition+200,boxY,20,100);
	boxRightSprite.shapeColor="red";
	boxrightBody=Bodies.rectangle(boxPosition+200,boxY,20,100,options);
	Engine.run(engine);
  
}



function draw() 
{
  rectMode(CENTER);
  background("black");
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y;
  translate();
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)
  {

   Matter.Body.setStatic(packageBody, false);
    
  }
}
