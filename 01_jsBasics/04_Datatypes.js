// There are two types of data types in javascript

// 1 -> Primitive
    /* 
    There are 7 types of primitive data types in js
    String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt
    */
// 2-> Reference (Non Primitive)
    /*
    Array 
    Object
    Functions
    */


 const id = Symbol("123")
 const anotherId = Symbol("123")

//  console.table([id, anotherId])
//  console.log(id===anotherId)

 const bigNumber = 1646456446456n;
 // Here n represents that it is a bigint value if we remove the n from here the data type of this number is number and in there is n with even one digit number the data type is bigint.

//  console.log(typeof bigNumber)



 const heros = ["shaktiman", "naagraj" , "doga"]

 const obj = {
    name:'mohit',
    age: 20
 }

 function printYourName(name){
    console.log(`My name is ${name}`)
 }

 console.log(heros)
 printYourName('mohit')