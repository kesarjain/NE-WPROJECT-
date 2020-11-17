
var gamestate = "start";

var player1
var player2, player4,player3,bricks

var ground;
var army_attack;


function preload(){

//army=loadAnimation("army/png/Attack (1).png","army/png/Attack (2).png","army/png/Attack (3).png","army/png/Attack (4).png","army/png/Attack (5).png","army/png/Attack (6).png","army/png/Attack (7).png","army/png/Attack (8).png","army/png/Attack (9).png","army/png/Attack (10).png")
army_attack =loadAnimation("a1.png","a2.png","a3.png")

}
function setup(){
  createCanvas(displayWidth,displayHeight);





}
function draw(){
  drawSprites();
if (gamestate=== "start"){
 var bbo =createSprite(50,90,20,40)
text("read before playing the game",100,100)
 text("        instructions                          ",100,120)
 text("1.This is multiplayer challenge game",100,130)
 text("2.in this the player should shoot the enemies ",100,140)
 text("4.you get 10 lifelines when ever you miss to shoot the enemies.you lose a lifeline",100,150)
 text("3.when ever your life are completed then  your out and your score will marked ",100,160)
 text("4.At the end as per the kills you will getting the winner",100,170)
if(mousePressedOver(bbo)){
  gamestate="play"
}
}
else if(gamestate==="play"){

  ground =createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 ground.shapeColor=("red")
 player1 = createSprite(150,180,20,50)
 player1.addAnimation("attack",army_attack)
 player1.scale =0.6

 player2 = createSprite(120,180,20,50)
 player3 = createSprite(150,180,20,50)
 player4 = createSprite(180,180,20,50)
 spawnBricks(); 
}
}
function spawnBricks(){
  if(frameCount % 150 ===0){
    var brick =createSprite(displayWidth,400,500,100);
    brick.scale = 0.2;
    brick.velocityX = -3
brick.lifetime=500;


  }
}
