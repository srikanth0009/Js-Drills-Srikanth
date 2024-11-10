import { keys, values, map, pairs, invert, defaults } from "./Drill5.js";




const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.


// function values(obj) {
//   // Return all of the values of the object's own properties.
//   // Ignore functions
//   // http://underscorejs.org/#values
// }

// function mapObject(obj, cb) {
//   // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
//   // http://underscorejs.org/#mapObject
// }


// /* STRETCH PROBLEMS */



// Problem 1

let result1 = keys(testObject);
console.log(result1);

// problem 2

let result2 = values(testObject);
console.log(result2);


// Problem 3


export function mapObject(value) {
      
     value="Updated value";
     return value;

}

//console.log(testObject);
let result3 = map(testObject,mapObject);
console.log(result3);



// Problem 4

let result4 = pairs(testObject);
console.log(result4);


// Problem 5

const obj1={name:"srikanth", age:23, location:"bangalore"};

let result5 = invert(obj1);
console.log(result5);


//Problem 6

const obj = { name: "gopi", location: undefined};
const defaultProps = { age: 25, location: "hyderabad" };
console.log(defaults(obj, defaultProps)); // Output: { a: 1, b: 2, c: 3 }