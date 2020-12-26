var bullet, wall;
var speed,thickness,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2) ;
  wall.shapeColor="grey";

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
}

function draw() {
  background("black");

if(hascollided(wall,bullet)){
  
    bullet.velocityX=0;
    var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
    if(damage<10)
    {
     wall.shapeColor="green";
    }
   
    if(damage>10)
    {
     wall.shapeColor="red";
    }
   
}
drawSprites();
}

function hascollided(lwall,lbullet){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}



