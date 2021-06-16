class Diamond{
    constructor(){

        var options={
            restitution:1,
            friction:0,
     
        }
        this.body=Bodies.circle(250,14,10,options)
           
            World.add(world,this.body)
this.image=loadImage("images/diamond1.png")
    }
    display(){

       push ()
fill ("white")
translate (this.body.position.x,this.body.position.y)
rotate (this.body.angle)
imageMode(CENTER)

image(this.image, 0, 0, this.width, this.height);
pop ()
}
}
    
