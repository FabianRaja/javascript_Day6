//write a person class to hold all details
class person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    details(){
        console.log(`
        Name   : ${this.name}
        Age    : ${this.age}
        Gender : ${this.gender}
        `)
    }
}
const own=new person("Fabian Raja Fernando",21,"male");
console.log(own);
own.details();