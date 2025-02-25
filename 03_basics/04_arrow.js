const user = {
    username: "Darshan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //this keyword refers to current context of the mentioned variable or any type
        console.log(this); //this shows all the variable history and also current context
        
    }

}

// user.welcomeMessage()
// user.username = "Sam" //here we are changing the current context of username variable
// user.welcomeMessage()

// console.log(this); //there is no context in global 

// function chai(){
//     let username = "darshan"  //also this can not be accessed 
//     console.log(this.username); //this with variable can only be accessed in objects only, the output of this will be undefined
// }

// chai()


// const chai = function (){
//     let username = "Darshan"
//     console.log(this.username);
// } //this type of function declaration will also give same output as above function declaration

// chai()


// const chai = () => {
//     console.log(this); //this will display as empty object inside arrow function, so we can not access this inside arrow function 
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //this is explict declaration of the function and its variables

// console.log(addTwo(5, 4))

// const addTwo = (num1, num2) => num1 + num2 //this is implict declaration of the function

// console.log(addTwo(5, 4));

// const addTwo = (num1, num2) => (num1 + num2) //this is also implict declaration of the function and what ever we write inside arrow function using () will not have return key word 

// console.log(addTwo(5, 4));


const addTwo = (num1, num2) => ({username: "Darshan"}) //this is used to return object inside arrow function implict declaration, here we need to wrap object inside ()

console.log(addTwo());
