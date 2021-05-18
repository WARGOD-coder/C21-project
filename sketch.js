var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3")
}


function setup(){
    let canvas= createCanvas(800, 800);
    canvas.mousePressed(canvasPressed);



    block1 = createSprite(100,580,205,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "lightgreen";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "lightblue";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
  ball.velocityX=-4
  ball.velocityY=-5


}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "lightgreen";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0
        ball.velocityY=0
        //write code to stop music
    }


    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "lightblue";
    }
    drawSprites();
}
function canvasPressed(){
    music.play()
}