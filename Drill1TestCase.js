
import  {problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8} from "./Drill1.js";


const arrayOfObjects = [
    {
       id: 1,
       name: 'Alice',
       age: 30,
       email: 'alice@example.com',
       city: 'New York',
       country: 'USA',
       hobbies: ['reading', 'painting'],
       isStudent: false
    },
    {
       id: 2,
       name: 'Bob',
       age: 25,
       email: 'bob@example.com',
       city: 'London',
       country: 'UK',
       hobbies: ['playing guitar', 'hiking'],
       isStudent: true
    },
    {
       id: 3,
       name: 'Charlie',
       age: 35,
       email: 'charlie@example.com',
       city: 'Paris',
       country: 'France',
       hobbies: ['cooking', 'gardening'],
       isStudent: false
    },
    {
       id: 4,
       name: 'David',
       age: 28,
       email: 'david@example.com',
       city: 'Berlin',
       country: 'Germany',
       hobbies: ['photography', 'traveling'],
       isStudent: true
    },
    {
       id: 5,
       name: 'Eve',
       age: 32,
       email: 'eve@example.com',
       city: 'Sydney',
       country: 'Australia',
       hobbies: ['yoga', 'surfing'],
       isStudent: false
    },
    {
       id: 6,
       name: 'Frank',
       age: 33,
       email: 'frank@example.com',
       city: 'Los Angeles',
       country: 'USA',
       hobbies: ['playing basketball', 'reading'],
       isStudent: true
    },
    {
       id: 7,
       name: 'Grace',
       age: 29,
       email: 'grace@example.com',
       city: 'Toronto',
       country: 'Canada',
       hobbies: ['painting', 'running'],
       isStudent: false
    },
    {
       id: 8,
       name: 'Hannah',
       age: 31,
       email: 'hannah@example.com',
       city: 'Melbourne',
       country: 'Australia',
       hobbies: ['writing', 'knitting'],
       isStudent: true
    },
    {
       id: 9,
       name: 'Ivy',
       age: 27,
       email: 'ivy@example.com',
       city: 'Tokyo',
       country: 'Japan',
       hobbies: ['playing piano', 'cooking'],
       isStudent: false
    },
    {
       id: 10,
       name: 'Jack',
       age: 34,
       email: 'jack@example.com',
       city: 'Mumbai',
       country: 'India',
       hobbies: ['playing cricket', 'watching movies'],
       isStudent: true
    }
 ];
 
 
 // Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
 

 const emails = problem1(arrayOfObjects);

 console.log(emails);


// Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

const hobbies = problem2(arrayOfObjects);
console.log(hobbies);


// Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

const names = problem3(arrayOfObjects);
console.log(names);

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const nameAndCity = problem4(arrayOfObjects);
console.log(nameAndCity);

//    Implement a loop to access and print the ages of all individuals in the dataset.

const ages = problem5(arrayOfObjects);
console.log(ages);

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

const firstHobbie = problem6(arrayOfObjects);
console.log(firstHobbie);


//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

const nameAndEmail = problem7(arrayOfObjects);
console.log(nameAndEmail); 

//    Implement a loop to access and log the city and country of each individual in the dataset.

const cityAndCountry = problem8(arrayOfObjects);
console.log(cityAndCountry);

