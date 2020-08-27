var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud_img,ob1,ob2,ob3,ob4,ob5,ob6;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloud_img=loadImage("cloud.png");
  
  ob1=loadImage("obstacle1.png");
  ob2=loadImage("obstacle2.png");
  ob3=loadImage("obstacle3.png");
  ob4=loadImage("obstacle4.png");
  ob5=loadImage("obstacle5.png");
  ob6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnClouds();
  
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(80,120);
    cloud.addImage(cloud_img);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}