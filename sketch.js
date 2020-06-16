var movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  
  gameObject1=createSprite(200,200,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(400,200,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(600,200,50,50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(800,200,50,50);
  gameObject4.shapeColor="green";

}

function draw() {
  background("black");  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

if(isTouching(movingRect,gameObject3)===true){
  movingRect.shapeColor="red";
  gameObject3.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameObject3.shapeColor="green";
}

  drawSprites();
}
