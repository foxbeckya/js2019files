//normal function signatures
//define what parameters must be (a and b must be strings). define type of return (void)
function firstFunc(a: string, b:string): void {
    console.log(a,b);
}

firstFunc('adama', 'saul');
//firstFunc(10, 14); breaks, b/c not strings. catches 10. then fix 10, then catches 14

function secondFunc(c:string, d:string): string{
    return c+d;
}

secondFunc('elsa', 'anna');

function thirdFunc(one:number, two:number): number[]{
    let returnArr=[]
    returnArr.push(one)
    returnArr.push(two);
    return returnArr;
}

thirdFunc(23, 4);

//function expression signatures. looks like an arrow function, but is a type, not a function
let funcExp: (first: boolean) => number=(first) => {
    return 1;
    } 
//"(first)" through "number" is the signature/form the function will take. the type of the variable.

funcExp(false); //returns 1

let funcExp2: (star: string, netWorth: number) => void = (star, netWorth)=>{
 console.log(`Star: ${star} is worth ${netWorth}`)
 } 

 funcExp2('lebron james', 500)

 function sum(first:number, second: number, third?: number): number{
     if (typeof third === 'number'){
         return first+second+third;
     } else {
         return first+second;
     }
 }
//question mark after "third" makes it an optional parameter. need 2 numbers, can have 3. otherwise, breaks.
 sum(1, 2, 3); //return 6
 sum(4, 5); //return 9
 //sum(0, 1, 'two'); breaks, b/c 3rd param isn't a number

function sum2(...nums: number[]):number{  //... is rest operator. will store any number of numbers
    let returnNum=0;
    nums.forEach(val => returnNum = returnNum+val);
    return returnNum;
}

console.log(sum2(1,1,1,1,1,1,1));

//function overload. signature of function could be different things. 
function overload(a: boolean, b:boolean): void; //function signature. not a function. form of overload could be this, or could be next line
function overload(a:number, b:number): boolean;
function overload (a,b): any { 
    if (typeof a === 'boolean'){
        console.log (a,b);
    }else{
        return true;
    }
}

overload(true, false);