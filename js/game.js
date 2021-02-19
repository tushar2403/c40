class Game {

    constructor(){

}
 getState (){
  var gameStateref= database.ref('gameState');
  gameStateref.on("value",function(data){
      gameState=data.val();
  })
}
update(state){
    database.ref('/').update({
 gameState:state
    })
}
async start(){
    if(gameState===0){
    player= new Player();
    var playerCountref =await database.ref('playerCount').once('value');
    if (playerCountref.exists()){
    playerCount=playerCountref.val();
    player.getCount();
 }
    form= new Form();  
    form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage(car1img);
    car2 = createSprite (300,200);
    car3 = createSprite (500,200);
    car4 = createSprite (700,200);
    cars = [car1,car2,car3,car4];
    car2.addImage(car2img)
    car3.addImage(car3img)
    car4.addImage(car4img)
}
play (){
  form.hide();
  Player.getPlayerInfo();
  player.getCarsAtEnd();
  if (allPlayers!==undefined){
   // var display_position=130;
   background(groundimg);
 image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
   var index =0;
   var x=240;
   var y;
    for (var plr in allPlayers)  {
        index=index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x;
        cars[index-1].y=y;

        if(index===player.index){
            stroke(5);
            fill('red');
            ellipse(x,y,60,60);
        cars[index-1].shapeColor='red';
        camera.position.x=displayWidth/2;
        camera.position.y=cars[index-1].y
        
        }
       /* display_position+=20;
        textSize(15);
        text (allPlayers[plr].name+':'+allPlayers[plr].distance,120,display_position)*/
    }
  }
if (keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50;
    player.update();

}
if(player.distance>4100){
    gameState=2;
    player.rank++;
    Player.updateCarsAtEnd(player.rank)
}
drawSprites();
}
end(){
    console.log('game ended');
    console.log(player.rank);
}
}