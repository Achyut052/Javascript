let score = 33

console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

/*
conversion of number
// 33 => 33
// "33abc" => NaN
// true=>1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

/*
conversion of Boolean
1 =>true; 0 => false
""=> false; "abc" => true 
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/********* OPRATIONS **********/

let value =3
let negativeValue = -value
console.log(negativeValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%3);

let str1 = "abc"
let str2 = "def"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); //1
console.log(+""); //0

let count = 100
++count;
console.log(count);