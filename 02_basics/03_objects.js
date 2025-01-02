// Singleton Objects
// Object.create() // This is the constructor method to create objects it creats singleton objects

// Objects Literals

const mySym = Symbol("Mykey1")

const JsUser = {
    name: "Darshan",
    age: 21,
    "fullName": "Darshan Vidyadhar",
    [mySym]: "MyKey1" /* This is the method used to declare symbol inside object */ ,
    location: "Davangere",
    email: "darshan@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
} // This is how to create objects using objects literals and the keys specified inside this objects are in string format

// console.log(JsUser.email); // This method is more prefered to access the values of the specified object keys
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]); // Keys inside objects literals are always in string format

// console.log(typeof JsUser[mySym]); 

// console.log(JsUser);

JsUser.email = "darshan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "darshan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");  
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);   
}

console.log(JsUser.greetingTwo());