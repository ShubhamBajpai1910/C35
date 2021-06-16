var food,foodStock;
var dog,happyDog;
var database;
var yum;


function preload(){
 dogImage=loadImage("doggie.png");
  happyDogImage=loadImage("happy.png");
}

function setup() {
 createCanvas(1270,575);
database=firebase.database();

dog=createSprite(500,250,20,20);
dog.scale=0.6;
dog.addImage(dogImage);

foodStock=database.ref("food");
foodStock.on("value",readStock);


}



function draw() {
  background("cyan");  


if(keyWentDown(UP_ARROW)){
  writeStock(yum);
  dog.addImage(happyDogImage);
}

  drawSprites();
  textSize(20);
  fill("midnightblue");
text("Food reamaining = " + yum,1000,100);

  
}

function readStock(data){
  yum=data.val();
}



function writeStock(x){

if(x<=0){
  x=0;
}

else{
  x=x-1;
}

database.ref('/').update({
  food:x
})

 
}