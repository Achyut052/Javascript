const accountId = 1
let accountEmail = "abc@abc.in"
var accountPassword = "1234"
accountcity = "Goa"
let accountState

/*
prefer not use var
Because of issue of block scope and functional scope
*/

//accountId = 2 Not allowed
accountEmail = "ab@ab.com"
accountPassword = "2004"
accountcity = "siria"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);
