

export function keys(obj) {
    const value = [];
    for(let x in obj){
        value.push(x);
    }
    return value;
  }


 export  function values(obj) {

    const value = [];
    for(let x in obj){
        value.push(obj[x]);
    }
    return value;
}


export function map(testObject, cb){

    for(let x in testObject){

        let value = cb(testObject[x]);
        testObject[x]= value;
    }
    return testObject;
}


export function pairs(obj) {

  const result = [];
  
  for(let x in obj){

    const values = [];
    values.push(x);
    values.push(obj[x]);
    result.push(values);
  }
  return result;

}



export function invert(obj) {

  const newObj = {};

  for(let x in obj){
    
    newObj[obj[x]] = x;

  }
  console.log(newObj);
  return newObj;
  
}


export function defaults(obj, defaultProps) {

  for (let key in defaultProps) {

    if (obj[key] === undefined) {

      obj[key] = defaultProps[key];
    }
  }
  return obj;
}







