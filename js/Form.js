class Form {
  constructor() {
    this. input = createInput("Name");
    this. button = createButton('Play');
    this. greeting = createElement('h3');
     
  }
  hide(){
    this. greeting .hide();
    this. button.hide();
    this. input.hide();

  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    input.position(130, 160);
    button.position(250, 200);
    this.input.position(130,160);
    this.button.position(130,160);
    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      player.index=playerCount;
      
      playerCount+=1;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      thisgreeting.position(130, 160)
    });

  }
}
