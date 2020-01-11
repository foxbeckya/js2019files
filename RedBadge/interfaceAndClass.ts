interface Car{
    name: string;
    hp: number;
    passengers: number;
}

let fiesta: Car ={
    name: 'fiesta',
    hp: 80,
    passengers: 1.5,
}
//know what object has to have. go beyond that=break. interface builds a type for you. 

//interfaces for classes: they look at properties and methods that match interface. 
interface FoodInterface{
    ingredients: string[];
    reviewScore: number;
    haveEaten: boolean;
    personalMsg(): string;  //form for a method. no arguments. will return a string.
}

class Food implements FoodInterface{
    ingredients: string[];
    reviewScore: number;
    haveEaten: boolean;
    personalMsg(){
        return "hi!";
    }
    constructor(ingreds: string[], score: number, ateIt: boolean){
    this.ingredients=ingreds;
    this.reviewScore=score;
    this.haveEaten=ateIt;
    }
}

const pie = new Food(['pastry', 'pecan', 'filling'], 6, true);
console.log(pie);

//typescript and classes get used together a lot. class will have access to everything in the interface. make sure class gives objects access to those things. useful in a team setting. each person building class independently. interface ensures that everyone is using same/correct format. communication tool. not necessarily making you write a better class. 
//classes are blueprints for objects. interfaces are blueprints for classes.
