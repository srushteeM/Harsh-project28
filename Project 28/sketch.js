const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1= new Ground(1000,200,300,20);

    box1=new Box(1000,200);
    ball=new Ball(200,200);
    sling=new SlingShot(ball.body,{x:200,y:350});
}

function draw(){
    background(255);
    Engine.update(engine);
     ground.display();
     ground1.display();
        ball.display();
     box1.display();
     sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling.fly();
}

