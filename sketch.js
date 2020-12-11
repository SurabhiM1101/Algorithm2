var fixed,moving;
var object1,object2,object3,object4;





function setup() {
 var Canvas= createCanvas(1200,800);
  fixed=createSprite(200,200,150,70);
  moving=createSprite(250,300,150,70);
  fixed.shapeColor="green";
  moving.shapeColor="green";
  object1=createSprite(100,100,50,50);
  object2=createSprite(200,100,50,50);
  object3=createSprite(300,100,50,50);
  object4=createSprite(400,100,50,50);
  
  
  object1.shapeColor="green";
  object2.shapeColor="green";
  object3.shapeColor="green";
  object4.shapeColor="green";
}

function draw() {
  background(0);
  moving.x=World.mouseX;
  moving.y=World.mouseY; 
  if(isTouching(moving,object1)){
     moving.shapeColor="blue";
    object1.shapeColor="blue"; 
  }
  else{
    moving.shapeColor="green";
    object1.shapeColor="green" ;
 
  }
  if(isTouching(moving,object2)){
    moving.shapeColor="blue";
   object2.shapeColor="blue"; 
 }
 else{
   moving.shapeColor="green";
   object2.shapeColor="green" ;

 }
 if(isTouching(moving,object3)){
  moving.shapeColor="blue";
 object3.shapeColor="blue"; 
}
else{
 moving.shapeColor="green";
 object3.shapeColor="green" ;

}
if(isTouching(moving,object4)){
  moving.shapeColor="blue";
 object4.shapeColor="blue"; 
}
else{
 moving.shapeColor="green";
 object4.shapeColor="green" ;

}
if(isTouching(moving,fixed)){
  moving.shapeColor="blue";
 fixed.shapeColor="blue"; 
}
else{
 moving.shapeColor="green";
 fixed.shapeColor="green" ;

}
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object2.width/2+object1.width/2&& object2.x-object1.x<=object2.width/2+object1.width/2&&
    object1.y-object2.y<=object2.height/2+object1.height/2&& object2.y-object1.y<=object2.height/2+object1.height/2  ){
    return true;
  }
  else{
    return false;
  }
}