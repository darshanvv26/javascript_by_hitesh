// Date in JS

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); // toString() converts date and time into readable string format
// console.log(myDate.toDateString()); // toDateString() converts date into readable string fromat and displays only date
// console.log(myDate.toLocaleString()); // toLocaleString() converts date and time into local date and time coordinates

// console.log(typeof myDate); // Object type

// let myCreatedDate = new Date(2024, 11, 29) // note month reading starts from 0(jan) in this format
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2024, 11, 29, 17, 24) // We even can specify date and create our own date by specifiying inside Date()
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleString());

let newFormatDate = new Date("12-29-2024") // We can define date inside Date() in our own specified way paracticed locally
// console.log(newFormatDate.toLocaleString())

let myTimeStamp = Date.now() // We will get time in milliseconds from 1970 as mentioned in the documentation
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(myTimeStamp/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay() + 1);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getTime());

// `${newDate.getMonth()} date is ${newDate.getDate()}` using string interpollation we can implement date and time where ever we want in the statements