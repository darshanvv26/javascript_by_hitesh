let a = 10
const b = 20
var c = 30  //we need to avoid using this var because it causes problems of scopes it leaks out the value from block scope to global scope

if(true){
    let a = 20
    const b = 30
    console.log("Inner: ", a, b);
    
}  //this is block level scope whatever declared here stays here 

console.log(a);
console.log(b);
console.log(c);

