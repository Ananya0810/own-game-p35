class Ground{

    constructor(x,y,w,h){
this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)
this.height=h
this.width=w
    }
    display(){

        push ()
        fill (this.color)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
    }

}