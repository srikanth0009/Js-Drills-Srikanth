import { problem1, problem2, problem3, problem4 } from "./Drill2.js";


const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interests: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}


//Q1 Find all users who are interested in playing video games.


let result1 = problem1(users);
console.log(result1 + " - Interested users in playing video games ");


//Q2 Find all users staying in Germany.


let result2 = problem2(users);
console.log(result2 + " -  They are living in Germany ");


//Q3 Find all users with masters Degree.


let result3 = problem3(users);
console.log(result3 + " -  These people are done Masters ");


//Q4 Group users based on their Programming language mentioned in their designation


const result4 = problem4(users);

for(let i=0;i<result4.length;i++){
        if(i===1){
            console.log("GoLang programmers are : " + result4[i]);
        }else if(i===2){
            console.log("javascript programmers are : " + result4[i]);
        }else{
            console.log("python programmers are : " + result4[i]);
        }
}

