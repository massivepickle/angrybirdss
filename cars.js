/*class Cars extends BaseClass {
  constructor(x,y,angle){
    super(x,y,50,70,angle);
    this.image = loadImage("car1.png");
  }

  display(){
    super.display();
  }
};*/

class Cars{
  constructor(x, y, angle) {
      var options = {
          restitution: 0.1,
          friction: 0.8,
          density: 0.8
      }
      this.body = Bodies.rectangle(x, y, 50, 70, options);
      this.width = 50;
      this.height = 70;
      this.body.angle = angle;
      this.image = loadImage("car1.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}