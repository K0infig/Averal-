var frank;
var fireGround;
var fixedplatform
var platform, platformGroup;
var platformTop, platformTopGroup;
var bulletCount = 10;
var villain,villainGroup;
var PLAY =1;
var END =0;
var gameState = PLAY;
function setup() {
  
  createCanvas(800,600);
  frank = createSprite(100,100,20,20);
  frank.shapeColor = "blue";
  
  fixedplatform=createSprite(100,150,80,20);
  fixedplatform.lifetime = 500;
  fireGround = createSprite(400,580,800,20);
  fireGround.shapeColor = "orange";

  platformGroup = new Group();
  platformTopGroup =  new Group();
  villainGroup = new Group();
}

function draw() {
  background("green");
  textSize(20)
  fill("black"); 
  text("Bullets : "+bulletCount, 700,100) ;

  if(gameState == PLAY){

    if (keyWentDown("a")){
      frank.velocityX=-5;
      
    }
    if(keyWentUp("a")){
      frank.velocityX=0;
    }
  
    if (keyWentDown("d")){
      frank.velocityX=5;
      
    }
    if(keyWentUp("d")){
      frank.velocityX=0;
    }
    
  if (keyDown("e")){
    if(bulletCount>0){
      spawnBullets();
      bulletCount -= 1;
    }
    
    }
    frank.velocityY = frank.velocityY +0.5;
  
    if(frank.isTouching(fireGround)|| frank.isTouching(villainGroup)){
      //game over 
      //frank.collide(fireGround);
      gameState = END;
    }
  
    if(frank.isTouching(platformTopGroup) || frank.isTouching(fixedplatform)){
      frank.velocityY = 0;
      if(frank.isTouching(platformTopGroup)){
        frank.velocityX = -1.5;
      }
      
  
      if (keyWentDown("space")){
        frank.velocityY=-10;
        
      }
    }

    spawnPlatform();

  }
  else if(gameState == END){
    frank.velocityY =0;
    platformGroup.setVelocityXEach(0);
    platformTopGroup.setVelocityXEach(0);
    villainGroup.setVelocityXEach(0);
    fill("red");
    textSize(30);
    text("GAME OVER!!!",350,350);

  }
  


  
  drawSprites();
}

function spawnBullets(){
  bullet = createSprite(100,100,10,5);
  bullet.x = frank.x;
  bullet.y = frank.y;
  bullet.velocityX =3;
  bullet.lifetime = 60;

  

}

function spawnPlatform(){
  
  
  if(frameCount % 150== 0){

    var num = round(random(2));
    console.log(num);

    if(num == 0){
      platform = createSprite(800,random(200,400),random(50,100),10);
      platform.velocityX =-1.5;
      platformGroup.add(platform);


      platformTop = createSprite(800,platform.y-5 , platform.width, 2);
      platformTop.velocityX = -1.5;
      platformTop.debug = true;
      platformTopGroup.add(platformTop);

      villain = createSprite(810,platform.y-10,10,10);
      villain.velocityX = -1.5;
      villainGroup.add(villain);

    }
    else if(num==1){
      platform = createSprite(850,random(200,400),random(50,100),10);
      platform.velocityX =-1.5;
      platformGroup.add(platform);


      platformTop = createSprite(850,platform.y-5 , platform.width, 2);
      platformTop.velocityX = -1.5;
      platformTop.debug = true;
      platformTopGroup.add(platformTop);

    }
    else if(num ==2){
      platform = createSprite(750,random(200,400),random(50,100),10);
      platform.velocityX =-1.5;
      platformGroup.add(platform);


      platformTop = createSprite(750,platform.y-5 , platform.width, 2);
      platformTop.velocityX = -1.5;
      platformTop.debug = true;
      platformTopGroup.add(platformTop);

      villain = createSprite(760,platform.y-10,10,10);
      villain.velocityX = -1.5;
      villainGroup.add(villain);

    }

    
      
  
  
    
  }
  

}