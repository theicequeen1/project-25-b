class dustbin{
  constructor(x,y){
   var options = {
       'isStatic' : false,      
       'density' : 1.5,
       'friction' : 1.0,
       'restitution' : 0.5
   }   
   this.body = Bodies.rectangle(x,y,50,50,options);
   this.width = 50;
   this.height = 50;
   this.image = loadImage("dustbingreen.png");
World.add (world,this.body);
  }
  display(){
      var pos = this.body.position;
      pos.x = mouse.x;
      pos.y = mouse.y;
      var angle = this.body.angle;
      
      push();
      translate(pos.x,pos.y);
      strokeweight(3);
      stroker('blue');
      fill('green');
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
  }
  }  
