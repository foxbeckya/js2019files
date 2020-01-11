//boolean type
let bool: boolean = true;
//bool = 10; not a boolean. doesn't work
//number type
let num: number = 10;
//string type
let str: string = 'Tesla';
//undefined type
let undef: undefined = undefined; 
//string array type
let strArr: string[]= ['word', 'words', 'anotherword'];
let numArr: number[] = [4, 23, 37];

//tuple type. has 3 spaces to use. 
let sampTuple: [string, number, boolean] = ['magneta', 1, true];
//sampTuple = ['windstorm', 2, false, 'magneta'] breaks. 4 things is too many

//ntersection type. type of types
let interVar: number | string = 10;
interVar = 'magneta';

//any type. can be anything. defeats purpose of usefulness of TS. don't use it in ready to deploy code
let anyVar: any = 10;
anyVar = true;
anyVar='windstorm';
anyVar= undefined

//object type. just want to know generally that this is an object. can have anything inside
let obj: object ={
    name: 'windstorm',
    numPowers: 2,
    isVillain: false,
    age: 11
}