class Player extends BaseClass {
  constructor(x,y,angle){
    super(x,y,50,70,angle);
    this.image = loadImage("car4.png");
  }

  display(){
    super.display();
  }
};