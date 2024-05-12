// primitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

let name = "abc"
let score = 3.3
let isLoggedIn = true
let temp = null
let state
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2); //false
let bigNumber = 123456n
console.log(typeof bigNumber); //bigint

// Non-primitive (Referencec type)
// Array, Objects, FUnction

let arr = ["1", "2", "3"];

let obj = {
    Name: "abc",
    age: 22
}

const myFunction = function(){
    console.log(arr);
}