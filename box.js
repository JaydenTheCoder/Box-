class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        //var pos = this.body.postition;
        rectMode(CENTER);
        rect(this.body.postition.x,this.body.postition.y, this.width, this.height);
    }
}