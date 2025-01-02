const tinderUSer = new Object() // Object() constructor used to create singleton objects
// const tinderUSer = {}

tinderUSer.id = "123abc"
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Darshan",
            lastName: "Vidyadhar"
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstName); // This method is used to acces the object element which are nested inside the objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}/*target*/, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3} // this method to concat objects is used most of the times
// console.log(obj4); 

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2, 
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "ds@gmail.com"
    }
] // Objects present inside array

console.log(users[2].email); // Method to access objects elements value results 

console.log(tinderUSer);

console.log(Object.keys(tinderUSer)); // keys(tinderUser) this method is used to see keys of the object specified these keys are stored in an array

console.log(Object.values(tinderUSer)); // values(tinderUser) this method is used to see the values of object these are stored in array
console.log(Object.entries(tinderUSer)); // entries(tinderUser) this method is used to store key values inside array and each pair is stored in main array

console.log(tinderUSer.hasOwnProperty("isLoggeIn"));