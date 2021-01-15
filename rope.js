class  Rope{
    constructor(body1,body2, point){
        
        var options = {
            bodyA: body1,
            pointB: body2,
            pointB:point,
            length:100
            
        }
        this.rope = Constraint.create(options);
        this.point=point
        World.add(world, this.rope);
    }
      
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.point.x, pointB.y+this.point.y);}
        
        }    
}