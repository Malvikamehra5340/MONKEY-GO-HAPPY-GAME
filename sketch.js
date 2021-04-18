var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(100,300,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,360,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white")
  stroke("white")
  textSize(20)
  fill("white");
  text("Score:" + score ,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" +survivalTime , 200,50)
  
  console.log(monkey.y)
  if(keyDown("space") && monkey.y >= 293.6) {
      monkey.velocityY = -14;
    }
  
    monkey.velocityY = monkey.velocityY + 0.7
  
  if (ground.x < 500){
      ground.x = ground.width/2;
    }
  
  
  
  monkey.collide(ground)
  
  spawnBananas();  
  spawnObstacles();
  
  drawSprites();
  
}

function spawnBananas(){

  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 250;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);

  }


}

function spawnObstacles(){
  
  if(frameCount % 300 === 0) {

    obstacle = createSprite(600,337,10,40);
    
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 250;
    obstacleGroup.add(obstacle);
  }
}





