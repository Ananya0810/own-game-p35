class Basket{

    constructor(x,y,w,h){
      var  options={
            restituition:1,
            friction:1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        
        World.add(world,this.body)
        this.height=h
        this.width=w
        this.image=loadImage("images/basket.png")
            }
            display(){
                push ()
                this.body.position.x = mouseX;
                this.body.position.y = mouseY;
               
              
                imageMode(CENTER)
                image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
                pop ()
            }
        
}