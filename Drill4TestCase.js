
import { each, map, reduce, find, filter, flatten } from "./Drill4.js";


const items = [1, 2, 3, 4, 5, 5];


// Problem1 

 each(items,cbEach);

 function cbEach(element) {
  console.log(element);
}


 //Problem2

function cbMap(element){
  
  return element*element;
}

const mapArray = map(items,cbMap);
console.log(mapArray);


//Problem3

function cbReduce(total, item){
  return total+item;
}

 let result3 = reduce(items,cbReduce,0)

 console.log(result3);


 //Problem 4


function findElement(item) {
  if (item > 4) {
      return true;
  }
  return false;
}

let result = find(items,findElement);

console.log(result);


// Problem 5

function filterElements(item){
  if(item > 1){
      return true;
  }
  return false;
}

let result5 = filter(items,filterElements);

console.log(result5);


// Problem 6

const nestedArray = [1, [2], [[3]], [[[4]]]]; 

const newArr = flatten(nestedArray);
console.log(newArr);








