

export function each(elements, cb) {

    for (let i = 0; i < elements.length; i++) {
        cb(elements[i]);
    }
}


export function map(elements, cb) {

    const newArray = [];

    for (let i = 0; i < elements.length; i++) {

        newArray.push(cb(elements[i]));
    }
    return newArray;
}


export function reduce(elements, cbReduce, startingValue) {


    let startIndex = 0;

    if (elements.length === 0) {

        throw new TypeError("Array is empty");
    }

    if (startingValue === undefined) {

        startingValue = elements[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < elements.length; i++) {

        startingValue = cbReduce(startingValue, elements[i]);

    }
    return startingValue;

}


export function find(elements, cb) {

    for (let i = 0; i < elements.length; i++) {

        let result = cb(elements[i]);
        if (result === true) {
            return i;
        }
    }

}


export function filter(elements, cb) {

    const array = [];
    for (let i = 0; i < elements.length; i++) {

        let value = cb(elements[i]);

        if (value === true) {
            array.push(elements[i]);
        }
    }
    return array;
}


export function flatten(array) {

    let result = [];
  
    array.forEach(item => {
      if (Array.isArray(item)) {

        result = result.concat(flatten(item)); 
      } else {

        result.push(item);
      }
    });
  
    return result;
  }
  
 
  






