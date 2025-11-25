let message: string = "Hello, TypeScript!";
console.log(message);

//message = 1; // This line will cause a type error because 'message' is declared as a string.

//primitive types
let num: number = 42;
let isActive: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let bigIntValue: bigint = 9007199254741991n;
let symbolValue: symbol = Symbol("unique");

let anyvalue: any = "I can be anything";
anyvalue = 100;

let unknownValue: unknown = "I am unknown";
unknownValue = 200; // unknowvalue= unknownvalue + 100; // This will cause an error

//array types
let numberArray: number[] = [1, 2, 3, 4, 5];
//tuple type
let tupleValue: [string, number] = ["Age", 30];

let id:string | number|boolean;
id = "Adi";
console.log( id)
id = 67890;
//id = true;//error

//function types
function add(a: number, b: number): number {
  let sum = a + b;
    return sum;
}

let result:number= add(5, 10);
console.log(result)

const info =(name:string|number):void=>{
    console.log(name)
}

info("Adi");
info(25);

//object types
let person: { name: string; age: number } = { name: "Adi", age: 25 };
console.log(person);
//isActive = false; error

//type interface

interface User{
    name:String;
    age:number;
    isActive?:boolean; //optional property
}
let user1:User={
    name:"sabyata",
    age:20
}
console.log(user1);

//types alias
type Point = {
    x:number;
    y:number;
    desc?:String;

}
let point1:Point={
    x:10,
    y:20,
    desc:"2D spaace"
};
console.log(point1);

//generics<T>
function identity<T>(arg:T):T{
    return arg;
}
let output1= identity<string>("Hello Generics");
let output2= identity<number>(100);
console.log(output1);
console.log(output2);

//ENUMS
enum Role{      
    Admin,
    User,
    Guest
}
let userRole:Role= Role.Admin;
console.log(userRole)//index - 0
console.log(Role[userRole])//value - admin



interface UserDetails{
    id:number;
    name:string;
    role:Role;
}
let user2:Partial<UserDetails>={
    role:Role.User
};
console.log(user2);

let user3:Readonly<UserDetails>={
    id:1,
    name:"Adi",
    role:Role.Admin
};
//user3.id=2; //error
console.log(user3);