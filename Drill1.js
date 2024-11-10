
/*  Problem 1 */

export function problem1(arrayOfObjects) {

   const result = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {

      result.push(arrayOfObjects[i].email);
   }
   return result;
}

// Problem 2

export function problem2(arrayOfObjects) {

   const result = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {

      if (arrayOfObjects[i].age == 30) {

         result.push(arrayOfObjects[i].hobbies);
      }
   }
   return result;
}


//Problem3 

   export function problem3(arrayOfObjects){

      const values = [];

      for(let i=0;i<arrayOfObjects.length;i++){

         if(arrayOfObjects[i].isStudent === true && arrayOfObjects[i].country === 'Australia'){

            values.push(arrayOfObjects[i].name);
         }
      }
      return values;
   }

//Problem 4 

export function problem4(arrayOfObjects) {

   const values = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {

      if (i === 3) {
         values.push(arrayOfObjects[i].name);
         values.push(arrayOfObjects[i].city)
      }
   }
   return values;
}


//Problem 5

export function problem5(arrayOfObjects) {

   const result = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {

      result.push(arrayOfObjects[i].age);
   }
   return result;
}

// Problem 6

export function problem6(arrayOfObjects) {

   const result = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {

      let value = arrayOfObjects[i].hobbies[0];
      result.push(value);
   }
   return result;
}

//Problem 7

export function problem7(arrayOfObjects) {

   let values = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {

      if (arrayOfObjects[i].age === 25) {

         let individual = [];

         individual.push(arrayOfObjects[i].name);
         individual.push(arrayOfObjects[i].email);

         values.push(individual);
      }

   }
   return values;

}

//Problem 8

export function problem8(arrayOfObjects) {

   let values = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {


      let individual = [];

      individual.push(arrayOfObjects[i].city);
      individual.push(arrayOfObjects[i].country);

      values.push(individual);
   }
   return values;
}


