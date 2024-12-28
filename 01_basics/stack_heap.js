// Stack(primitive), Heap(non-primitive)

let myYoutubeName = "hiteshchoudharydotcom"
let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "darshan@maximus.com"
console.log(userOne.email);
console.log(userTwo.email);