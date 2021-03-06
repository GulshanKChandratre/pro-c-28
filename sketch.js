
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  
	stoneObj=new stone(235,420,30); 

	mango1=new mango(1000,100,20);
	mango2=new mango(900,110,20);
	mango3=new mango(1000,120,30);
	mango4=new mango(1200,200,40);
	mango5=new mango(1100,140,30);
  mango6=new mango(950,160,25);
	mango7=new mango(1050,90,30);
	mango8=new mango(1110,150,40);
	mango9=new mango(1018,201,15);
	mango10=new mango(1010,50,35);


    //stone=new stone(500,500,50,50);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  
  launcherObject = new launcher(stoneObj.body,{x:235,y:420});
	

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	Engine.run(engine);

}


function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display(); 
  mango3.display(); 
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

stoneObj.display();
  groundObject.display();
  launcherObject.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
    launcherObject.attach(stoneObj.body);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
