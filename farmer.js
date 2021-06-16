class Farmer{

    constructor(x,y,w,h){
this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})

World.add(world,this.body)
this.height=h
this.width=w
this.image=loadImage("images/farmer.png")
    }
    display(){

        push ()
      
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
    }

}