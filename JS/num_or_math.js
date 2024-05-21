const score = 400
console.log(score); // 400 => automatic selected detatype by default

const balance = new Number(400.000253)
console.log(balance); // [Number : 400] => Spacific datatype given by developer

console.log(balance.toString().length); //for make number as string to use property of string
console.log(balance.toFixed(2)); //It is use for remove extra decimal values

console.log(balance.toPrecision(4)); // for howmuch numbers you want to show

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-IN"));



//**************** MATHS ******************** */

console.log(Math);