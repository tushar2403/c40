class Form {
    constructor (){
this.input=createInput('name');
this.greetings =createElement('h2');
this.button = createButton('PLAY');
this.reset = createButton('RESET')
this.title=createElement('h1');
    }
    display(){
    
     
   this.title.html('Car Racing Game');
   this.title.position(displayWidth/2-50,0);
   this.input.position(displayWidth/2-40,displayHeight/2-80);
   this.button.position(displayWidth/2+30,displayHeight/2);
   this.reset.position(displayWidth-100,20);
   this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
   player.name = this.input.value();
         playerCount+=1;
         player.index=playerCount
         player.update();
        player.updateCount(playerCount);
        this.greetings.html('hello ' + player.name);
        this.greetings.position(displayWidth/2-70,displayHeight/4);
     })
     this.reset.mousePressed(()=>{
player.updateCount(0);
game.update(0);
     })
        
    }
    hide(){
    this.input.hide();
    this.button.hide();
    this.greetings.hide();
    }
}