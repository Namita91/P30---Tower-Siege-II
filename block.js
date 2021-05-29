class Block{
    constructor(x, y, width, height) {
        var options = {
          isStatic: false,
          friction: 0,
          restitution: 0.2
        }
        this.image = loadImage("block.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
          push();
          //var angle = this.body.angle;
          var pos= this.body.position;
          if(this.body.speed < 3) {
            //translate(pos.x, pos.y);
            //rotate(angle);
            //rectMode(CENTER);
            //rect(0,0,this.width, this.height);
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.width, this.height);
          } else {
            World.remove(world, this.body);
            this.visibility = this.visibility - 4;
            tint(255, this.visibility);
            image(this.image, pos.x, pos.y, this.width, this.height);

          }
          pop();
        
      }
}
