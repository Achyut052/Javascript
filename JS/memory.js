// Stack(Primitive) => It will give refrance or copy of variable for make changes

let myName = "abc"

let anotherName = myName
anotherName = "xyz"

console.log(myName); //abc
console.log(anotherName); //xyz


// Heap(Non-primitive) => It can be give actual variable for make changes
let userOne = {
    emailID: "abc",
    ID: 123
}

let userTwo = userOne

userTwo.emailID = "xyz"

console.log(userOne.emailID); //xyz
console.log(userTwo.emailID); //xyz
