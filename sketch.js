const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Bounds = Matter.Bounds;

var engine, world;
var box1, pig1,pig3;
var ground;
var bird;
var reset;

var gamestate = 0;

function touching(x, y, approximateRange) {
    var newBounds = {
        min: {
            x: x - approximateRange,
            y: y - approximateRange
        },
        max: {
            x: x + approximateRange,
            y: y + approximateRange
        }
    }
    for(var j = 0; j < Matter.Composite.allBodies().length; j++) {
        if (Bounds.overlaps(Matter.Composite.allBodies[j].bounds, newBounds)) {
            return true;
        }
    }
    return false;
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Track(600,-3170,1200,7948);

    car1 = new Cars(810, 350,50);
    car2 = new Cars(810, 220,300);

    player = new Player(600,600,0);

    reset = createButton('reset');
    reset.position(585,100);
}

function draw(){  
    Engine.update(engine);
    background(0);
    ground.display();

    car1.display();
    car2.display();
   
    bird.display();
    camera.position.x = bird.body.position.x;
    camera.position.y = bird.body.position.y;
    if(gamestate === 0){
        reset.hide();
        if(keyDown('UP') || keyDown('W')){
            bird.body.position.y -= 50;
        }else if(keyDown('DOWN') || keyDown('S')){
            if(bird.body.position.y < 400){
                bird.body.position.y += 50;
            }
        }
        if(keyDown('A') || keyDown('LEFT')){
            bird.body.angle = -20;
            if(keyDown('DOWN') || keyDown('S')){
                bird.body.angle = 20;
            }
            bird.body.position.x -= 20;
        }else if(keyDown('D') || keyDown('RIGHT')){
            bird.body.angle = 20;
            if(keyDown('DOWN') || keyDown('S')){
                bird.body.angle = -20;
            }
            bird.body.position.x += 20;
        }else{
            bird.body.angle = 0;
        }
        //console.log(touching(600,600,100));
        console.log(Matter.Detector.canCollide(bird.body, pig1.body));

    }else{
        reset.show();
        reset.mousePressed(()=>{
            gamestate = 0;
            Matter.Body.setPosition(bird.body, {x: 600 , y: 600});
        });
    }
}