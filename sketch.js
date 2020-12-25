var harrypotter,harrypotterImg;
var form,game,player;
var database;
var gameState=0;
var playerCount;

function preload(){

  //  harrypotterImg= loadImage("harry potter flying.png")

}

function setup(){
createCanvas(900,900);

database = firebase.database();
game = new Game();
game.getState();
game.start();

//harrypotter=createSprite(400,400,50,50);
//harrypotter.addImage("harrypotter",harrypotterImg)

}
function draw(){
background("white");

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }


drawSprites();
}