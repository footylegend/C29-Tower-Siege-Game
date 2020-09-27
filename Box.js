class Box {
  constructor(x, y, width, height){
    var options = {
      isStatic : false,
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    if(this.body.position.y>360 & this.body.position.y<410){
    fill("red");
    }
    if(this.body.position.y>410 & this.body.position.y<460){
      fill("blue");
    }
    if(this.body.position.y>460){
      fill("cyan");
    }
    if(this.body.position.y>310 & this.body.position.y<360){
      fill("yellow");
    }
    if(this.body.position.y>260 & this.body.position.y<310){
      fill("purple");
    }
    if(this.body.position.y>210 & this.body.position.y<260){
      fill("golden");
    }
    if(this.body.position.y>160 & this.body.position.y<210){
      fill("black");
    }
    if(this.body.position.y>110 & this.body.position.y<160){
      fill("silver");
    }

    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
}