class Movie{
    constructor(title,studio,rating){
       this.title=title;
       this.studio=studio ;
       this.rating=rating || "PG";
    }
     getPG(){
        if(this.rating=="PG"){
            console.log("Movie:" + this.title);
        }
    }
}
//with rating
const data=new Movie("Casino Royale","Eon Productions","PG13");
console.log(data);
data.getPG();

//without rating
const data1=new Movie("Casino Royale","Eon Productions");
console.log(data1);
data1.getPG();