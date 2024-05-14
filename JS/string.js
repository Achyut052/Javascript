let name = "abc"
let repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("asdf-ghjkl")

console.log(gameName[0]);
console.log(gameName.__proto__); // how to write prototype 
console.log(gameName.toUpperCase()); // for make all charactor uppercase
console.log(gameName.charAt(3)); // for know charactor using index no.
console.log(gameName.indexOf("d")); // property for know index value of charactor

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  ABC  "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim is use for remove unnessesurry space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", "-"));

console.log(gameName.split("-"));