class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
      this.body = Bodies.rectangle(x,y,width,height,options)

      World.add(world, this.body);
      this.width = width;
      this.height = height;

    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      if(keyIsDown(UP_ARROW) ){
        angle = angle - 0.02;
        Matter.Body.setAngle( tanker.body, angle);
      }
      if(keyIsDown(DOWN_ARROW) ){
        angle = angle + 0.02;
        Matter.Body.setAngle( tanker.body, angle);
      }

      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(0);
      rect(0,0,this.width,this.height);
      pop();

      fill(0);
      arc(100, 575, 140, 150, PI , TWO_PI);
      
    };
}
