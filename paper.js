class Paper{
    constructor(x,y,r){

// add properties







}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    //el(0,0,this.r, this.r);
    image(this.body.image,0,0,this.r,this.r);
    pop();   
  }
}