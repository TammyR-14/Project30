class Pig extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //this.Visibilty=255;
  }
  display()
  {
    console.error.log(this.body.speed)
    if((this.body.speed)<3)
    {super.display();
  }else
  {
    World.remove(world,this.body)

    //push();
    //this.Visibilty=this.Visibilty-5;
    //tint(255,this.Visibilty)

    //do nothing
    //image(this.image,this.body.position.x,this.body.position.y,5,0,50)
    //pop();
  }}
};