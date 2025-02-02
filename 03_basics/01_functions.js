function sayMyName(){
    console.log("D")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
}   //simple function def 

// sayMyName()   //we need to call function in this manner

// function addNumbers(number1, number2){
//     console.log(number1 + number2);
// }    //this function only prints whatever mentioned in log but does not return any values

function addNumbers(number1, number2){
    // let result = number1 + number2    
    // return result      //we can store result in some variable and then return it                   

    return number1 + number2   //we can even directly return the operation and its result 
}

const result = addNumbers(3, 6) //we need to call function and pass arguments and we can also store function return or log value in a variable 
// console.log("Result:", result);

function isLoggedIn(userName){
    if(!userName){
        console.log("Please enter username.");
        return
    }
    return `${userName} just logged in...`
}   //this function will take userName as input parameter and if no parameter is passed it checks in if condition and pass message returns nothing

// console.log(isLoggedIn("Darshan"))

function isLoggedIn(userName = "user"){
    return `${userName} just logged in...`
}  //this function is also same as above but it carries default parameter if no parameter is specified it uses that default one and is any parameter specified it overides 

// console.log(isLoggedIn("Darshan"))
console.log(isLoggedIn());
