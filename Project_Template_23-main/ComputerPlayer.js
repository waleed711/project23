class ComputerPlayer{
    constructor(x,y,width,hieght){
        var options = {
            isStatic: true
        }

    
        this.body = Bodies.rectangle(x,y,width,hieght,options);
        this.width = width
        this.hieght = hieght
        this.image = loadImage("./assets/player.png");

        World.add(world, this.body);
    }

display(){
    var pos = this.body.position
    var angle = this.body.angle

    push()
    translate(pos.x, pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0, this.width, this.hieght)
    pop()
}



}
