// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(width/2, height-10, width, 30);
    tanker = new Tanker(100,522,210,25);

    ball1 = new Ball(450,0,20);
    ball2 = new Ball(550,140,20);
    ball3 = new Ball(650,80,20);
    ball4 = new Ball(750,20,20);
    ball5 = new Ball(850,100,20);
    ball6 = new Ball(950,120,20);
    ball7 = new Ball(1050,40,20);
    ball8 = new Ball(1150,60,20);
  
}

function draw() {
    background(0,191,255);
    Engine.update(engine);

    
    ground.display();
    tanker.display();
    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
}



function keyReleased() {
    // Call the shoot method for the cannon.
}