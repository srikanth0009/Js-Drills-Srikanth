import { counterFactory, limitFunctionCallCount, cacheFunction } from "./Drill6.js"; 


//Problem 1

let result1 = counterFactory();
console.log(result1.increment());
console.log(result1.increment());
console.log(result1.increment());
console.log(result1.increment());
console.log(result1.decrement());  
console.log(result1.decrement());
console.log(result1.decrement());
console.log(result1.decrement());


// Problem 2

function cb(){
    return "Hi";
  }
  
let result6 = limitFunctionCallCount(cb,3);
console.log(result6());
console.log(result6());
console.log(result6());
console.log(result6());
console.log(result6());


// Problem3
  
function total(...args){
    let sum = 0;
    for(let x of args){
        sum += x;
    }
    return sum;
  }


let result3 = cacheFunction(total);

console.log(result3(5,6));
