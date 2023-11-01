class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    double(){
        let a= this.radius*2
        console.log("Radius-Double : "+a);

    }
    both(){
        console.log(`Radius : ${this.radius}
Color  : ${this.color}`)
    }
    get getRadius(){
        return this.radius;
    }
    set setRadius(double){
        this.radius=double;
          
    }
    get getColor(){
        return this.color;
    }
    set setColor(color){
       this.color=color;
    }
    get area(){
        let pi=3.14;
        let radiusDouble=this.radius*this.radius;
        console.log("Area:")
        return pi*radiusDouble
    }
    get circumference(){
        let pi=3.14;
        let r=this.radius;
        console.log("Circumference:")
        return 2*pi*r;
    }
   
}

const data=new Circle(0.5,"red");
console.log(data);
data.double();
data.both();
console.log("radius : "+data.getRadius);
console.log(Circle.setRadius=5);
console.log("color : "+data.getColor);
console.log(Circle.setColor="blue");
console.log(data.area)
console.log(data.circumference);

