class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }

    this.body = Bodies.circle(x,y,radius, options);
    this.radius = radius
    World.add(world,this.body);
  }

  enter(){
    this.body.velocityY = 2;
  }

  display() {
    var pos = this.body.position
    var angle = this.body.angle
    
    push();
    translate(pos.x, pos.y);
    fill("orange");
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0, 0,this.radius);
    pop()
  }
}

