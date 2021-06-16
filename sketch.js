const Engine= Matter.Engine;
const World= Matter.World
const Bodies= Matter.Bodies;
var diamond=[]

function preload(){

  bgImg=loadImage("images/bg.png")
}
function setup() {
  createCanvas(480,800);

  
engine=Engine.create()
world=engine.world

Engine.run(engine)

//create bodies here 
 ground1= new Ground (240,790,485,30)
farmer1=new Farmer(50,690,450,500)
basket1=new Basket(50,690,600,400)





}

function draw() {
  background(bgImg);  
  drawSprites();

  ground1.display()
  farmer1.display()
  basket1.display()

if(frameCount%30===0){
 diamond.push(new Diamond() )
  }
  //display diamond
  
  for(i=0;i<diamond.length;i++){
     diamond[i].display()
    detectcollision(basket1,diamond[i]);
  }

}

function detectcollision(lbasket,ldiamond){

 diamondBodyPosition=ldiamond.body.position
 basketBodyPosition=lbasket.body.position
  
  var distance=dist(basketBodyPosition.x, basketBodyPosition.y, diamondBodyPosition.x, diamondBodyPosition.y)
  	if(distance<=ldiamond.r+lbasket.r)
    {
  	  Matter.Body.setStatic(ldiamond.body,false);
    }
  
  }



  
