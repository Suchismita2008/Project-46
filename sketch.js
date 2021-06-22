var deerAni, ManAni, manAni, WomanAni, GirlAni, bikeImg, BranchImg, carImg, CarImg, leavesImg, puddleImg, ScooterImg;
var immunityImg;
var bgImg1, bg;
var obstacleGroup, obstacles;
var boosterGroup, booster;
var deer, Man, man, Woman, Girl, bike, Branch, car, Car, leaves, puddle, Scooter;
var immunity;

function preload()
{
 deerAni = loadAnimation("deer1.png", "deer2.png", "deer3.png", "deer4.png", "deer5.png");
 ManAni = loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png");
 manAni = loadAnimation("man11.png", "man12.png", "man13.png", "man14.png", "man15.png", "man16.png", "man17.png", "man18.png");
 WomanAni = loadAnimation("woman1.png", "woman2.png", "woman3.png", "woman4.png", "woman5.png", "woman6.png", "woman7.png", "woman8.png");
 GirlAni = loadAnimation("girl1.png", "girl2.png", "girl3.png", "girl4.png", "girl5.png", "girl6.png", "girl7.png", "girl8.png", "girl9.png");
 bikeImg = loadImage("bike.png");
 BranchImg = loadImage("branch.png");
 carImg = loadImage("car1.png");
 CarImg = loadImage("car2.png");
 leavesImg = loadImage("leaves.png");
 puddleImg = loadImage("puddle.png");
 ScooterImg = loadImage("scooter.png");
 immunityImg = loadImage("immunity.png");
 bgImg1 = loadImage("City Road 2.jpeg");
}



function setup() {
  createCanvas(1500,550);

  bg = createSprite(750, 250, 1000, 700);
  bg.addImage(bgImg1);
  bg.scale = 1.75;

  /*puddle = createSprite(1300, 580, 40, 40);
  puddle.addImage(puddleImg);
  puddle.scale = 0.5;

  Woman = createSprite(300, 450, 40, 40);
  Woman.addAnimation("moving", WomanAni);
  Woman.scale = 0.7;
  
  car = createSprite(200, 550, 40, 40);
  car.addImage(carImg);*/

  deer = createSprite(200, 420, 40, 40);
  deer.addAnimation("moving", deerAni);
  deer.scale = 1;

 /* Scooter = createSprite(600, 500, 40, 40);
  Scooter.addImage(ScooterImg);

  Branch = createSprite(700, 510, 40, 40);
  Branch.addImage(BranchImg);
  Branch.scale = 0.3;

  Car = createSprite(1000, 600, 40, 40);
  Car.addImage(CarImg);
 
  Man = createSprite(500, 650, 40, 40);
  Man.addAnimation("moving", ManAni);

  man = createSprite(1000, 650, 40, 40);
  man.addAnimation("moving", manAni);

  bike = createSprite(1300, 620, 40, 40);
  bike.addImage(bikeImg);
  bike.scale = 1.5;

  Girl = createSprite(800, 650, 40, 40);
  Girl.addAnimation("moving", GirlAni);

  leaves = createSprite(400, 600, 40, 40);
  leaves.addImage(leavesImg);
  leaves.scale = 0.3;*/

  immunity = createSprite(50, 100, 40, 40);
  immunity.addImage(immunityImg);
  immunity.scale = 0.8  ;
}

function draw() {
  background("white"); 

  bg.velocityX = -5;
 if(bg.x < 400){
   bg.x = 750;
 }

 if(keyDown(UP_ARROW))
 {
   deer.y -= 1;
 }
 if(keyDown(DOWN_ARROW))
 {
  deer.y += 1;
 }
  /*if(frameCount % 2000 === 0){
    Car = createSprite(1600, 600, 40, 40);
    Car.addImage(CarImg);
    Car.velocityX = -5;
    Car.lifetime = 200;
  } 
  if(frameCount % 1000 === 0){
    Girl = createSprite(1600, 650, 40, 40);
    Girl.addAnimation("moving", GirlAni);
    Girl.velocityX = -6;
    Girl.lifetime = 200;
  }*/
console.log(bg.x);
  spawnBoosters();

  spawnObstacles();
  
  drawSprites();
}


function spawnObstacles()
{
  if(frameCount % 300 === 0){
     obstacles = createSprite(1600, round(random(370, 450)), 400, 40);
     obstacles.velocityX = -3;
     var run = Math.round(random(1, 8));

     switch(run){
       case 1: obstacles.addAnimation("Moving", GirlAni);
       obstacles.scale = 0.7;
       break;
       case 2: obstacles.addImage("Moving1", CarImg);
       obstacles.scale = 0.7;  
       break;
       case 3: obstacles.addAnimation("Moving", ManAni);
       obstacles.scale = 0.7;
       break;
       case 4: obstacles.addImage(ScooterImg);
       obstacles.scale = 0.7;
       break;
       case 5: obstacles.addImage(bikeImg);
       obstacles.scale = 0.9;
       break;
       case 6: obstacles.addAnimation("moving", WomanAni);
       obstacles.scale = 0.7;
       break;
       case 7: obstacles.addAnimation("moving", manAni);
       obstacles.scale = 0.7;
       break;
       case 8: obstacles.addImage(carImg);
       obstacles.scale = 0.7;
       default:break;

     }
    }
  }

  function spawnBoosters()
  {
    if(frameCount % 1000 === 0)
    {
      booster = createSprite(1600, round(random(370, 450)), 40, 40);
      booster.velocityX = -3;
      var rand = Math.round(random(1, 3));

      switch(rand){
        case 1: booster.addImage(leavesImg);
        booster.scale = 0.3;
        break;
        case 2: booster.addImage(puddleImg);
        booster.scale = 0.3;
        break;
        case 3: booster.addImage(BranchImg);
        booster.scale = 0.3;
        default:break;
      }
    }
  }
   
