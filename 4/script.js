//write a class to calculate uber price

class Uber{
    constructor(name,otp,distance){
        this.name=name;
        this.otp=otp;
      this.distance=distance;
    }
    calculate(){
        if(this.otp==2430){
          let a=this.distance*10;
          console.log(`
          Hi ${this.name} ,
          Fare : ${a}Rs for ${this.distance}km
          Continue...
          `)
        }else{
            console.log(`
            Hi ${this.name},
            Otp ${this.otp} is Invalid
            Try Again...
            `)
        }
    }
}
//valid 
const valid=new Uber("Fabian",2430,16);
console.log(valid);
valid.calculate();

//invalid
const invalid=new Uber("Fabian",1111,10);
console.log(invalid);
invalid.calculate();
