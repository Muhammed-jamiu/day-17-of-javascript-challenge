console.log("Day-17-javascript-challenge");
const skills = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.

const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
console.log(localStorage);

///
let skillss = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];
let skillJSON = JSON.stringify(skillss);
localStorage.setItem("skills", skillJSON);
// console.log(localStorage);

console.clear();

const user = {
  firstName: "Asabeneh",
  age: 250,
  skills: ["HTML", "CSS", "JS", "React"],
};

const userDetails = {
  firstName: "Muhammed-Jamiu",
  age: 29,
  skills: ["HTML", "CSS", "JS", "React", "Word-press", "Java", "Tailwind"],
};
const userText = JSON.stringify(user, undefined, 4);
console.log(typeof user);
console.log(typeof userText);

localStorage.setItem("user", userText);
// console.log(localStorage);

const userProf = JSON.stringify(userDetails);

sessionStorage.setItem("user", userProf);
console.log(sessionStorage);
sessionStorage.getItem("user");
console.log(localStorage);

// Exercises
// Exercises: Level 1
//  1.Store you first name, last name, age country,city in your browser localStorage.
const student = {
  firstName: "Abdulsalam",
  lastName: "Muhammed-Jamiu",
  age: 29,
  country: "Nigeria",
  city: "Okene",
  skills: [
    "Html",
    "Css",
    "Javascript",
    "Java",
    "React",
    "Word-press",
    "Tailwind",
  ],
};

const studentProfiles = JSON.stringify(student);

localStorage.setItem("userProfile", studentProfiles);

// Exercises: Level 2

// 1. Create a student object.The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys.Store the student object in your browser localStorage.

const myProfile = {
  firstName: "Abdulsalam",
  lastName: "Muhammed-Jamiu",
  age: 29,
  country: "Nigeria",
  city: "Okene",
  skills: [
    "Html",
    "Css",
    "Javascript",
    "Java",
    "React",
    "Word-press",
    "Tailwind",
  ],
};

const myProfiles = JSON.stringify(myProfile);

localStorage.setItem("userProfile", myProfiles);

// Exercises: Level 3
// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
// 🎉 CONGRATULATIONS ! 🎉
