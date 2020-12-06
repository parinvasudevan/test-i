class mango {
    constructor (x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.body=Bodies.circle(x,y,radius,options)
    this.r=radius
    this.image = loadImage("sprites/mango.png");

      }
display() {
    
    var mangopos=this.body.position;		

			push()
			translate(mangopos.x, mangopos.y);
			rectMode(CENTER)
			ellipse(0,0,this.r, this.r);
			pop()

  }
    
}