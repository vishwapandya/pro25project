class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;
        //add image



        World.add(world,this.body);
    }
    display(){
      //display image


      
    }
}