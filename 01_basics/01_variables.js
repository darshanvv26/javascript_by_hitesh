const accountId = 1123
let emailId = "darshanvv26@gmail.com"
var passoword = "12345"
accountCity = "Davangere" // This should be avoided it is just to show this is also possible 
let accountState;

// accountId = 23 // we can not alter the accountId. If once it is declared with const(keyword)
emailId = "dvv@rnsit.ac.in"
passoword = "45667"
accountCity = "Bengaluru"

/* var is not used resently in JS because of isssue in block scope({}) and functional scope */

console.log(accountId);

console.table([accountId, emailId, passoword, accountCity, accountState])