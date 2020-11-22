class Paper {
    constructor(x, y, r) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction: 1.0,
        density:1.2
      
      }
      this.x = x;
      this.y = y;
      this.r= r;
      this.body = Bodies.circle(this.x,this.y,(this.r-10)/1,options);
      this.image = loadImage("CrumpledPaper.png")
      World.add(world, this.body);
  
    }
    display(){
      var paperpos = this.body.position;
      push();
      translate(paperpos.x, paperpos.y);
      image(this.image, 0,0,this.r,this.r);
      pop();
    }
  }
  