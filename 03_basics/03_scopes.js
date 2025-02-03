let a = 10
const b = 20
var c = 30  //we need to avoid using this var because it causes problems of scopes it leaks out the value from block scope to global scope

if(true){
    let a = 20
    const b = 30
    // console.log("Inner: ", a, b);
    
}  //this is block level scope whatever declared here stays here 

// console.log(a);
// console.log(b);
// console.log(c);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    let userName = "Darshan"
    function two(){
        let website = "youtube"
        console.log("MyName:", userName);
    }
    // console.log(website);  //this line causes error because we can not access the variabe declared in inner block scope

    two()
}

// one()

if(true){
    let userName = "Darshan"
    if(userName == "Darshan"){
        let website = " youtube"
        console.log(userName + website);
        
    }
    // console.log(website); //same as explained above this causes error 
    
}

// console.log(userName); //we can not access this userName variable


//++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addOne(8))  //this is normal function declaration we can call function from wherever we want
function addOne(num){
    return num + 1
}
        

const addTwo = function(num){  //this is also a type of function declaration also called as expression we can also learn about function hosting
    return num + 2
}

console.log(addTwo(8))