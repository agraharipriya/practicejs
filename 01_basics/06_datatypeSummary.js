// Primitive datatypes
// 7 types : String , Number , Boolean, null, undefined, symbol, BigInt.
const score=100;
const scoreValue=200.34
const isLoggedIn=true
const outSidetemp=null
console.log(typeof null); // object

let userEmail;
console.log(typeof userEmail); //undefined

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id === anotherId);

const bigNumber=2323244239n;
console.log(typeof bigNumber); // bigint


// reference (non-premitive datatypes)

// Array, Objects,Functions 

const heros=["Shaktiman", "Nagraj", "Doga"]   //Array
console.log(typeof heros);  //object


 let myObj={
    name:"priya",
    age:23,

}
console.log(typeof myObj); //object

const myFunction=function () {
    console.log("hellooo jiiii");
    
}
console.log(typeof myFunction);  // function object
