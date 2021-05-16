class Drop{
    constructor(x,y){
        var options = {
            isStatic:false,           
            restitution:0.1,
            friction:0.1
        }
       
        this.drop = Bodies.circle(x,y,3.5,options);
        this.radius = 7;
		this.x = x;
		this.y = y;
        World.add(world, this.drop);
        
      
    }
    display(){
       var pos = this.drop.position;
    
        ellipseMode(CENTER);
        fill("skyblue");
		
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)});
        }
    }
};