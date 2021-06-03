class Block4{
    constructor(x,y,width,height){
        var options = {

            restituition: 0.4,
            friction:0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(128,128,128);
        strokeWeight(8);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        
    }
}