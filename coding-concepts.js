// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: This will log each letter in the string separetly and in "".
// b) Verify and explain: My prediction was correct. The .split() built-in method in JacaScript takes an argument of where to split the string and the double quotation marks ("") will output all letters in the string separetly.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))
// undefined

// a) Your answer: I predict the above code will output undefined, for the simple fact that our function is missing the word return in line 20.
// b) Verify and explain: I verified the ouput and noticed that it was undefined. I believe the reason for this undefined output is because we are missing the word return on line 20. To verify this claim, I added the word return on line 20 and checked the output once again, this time receiving the output of Hello, LEARN Student!


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)
// [ 8, 10, 12, 14, 16 ]

// a) Your answer: I predict the above function will output the value of each item in the array multiplied by 2. [8,10,12,14,16]
// b) Verify and explain: My prediction was correct. To elaborate, the above HOF uses .map() to produce an ouput of each value of the array multiplied by 2. In this example, the keyword return is not needed because the entire function is written in a single code line.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)
// [ 11, 13, 15 ]

// a) Your answer: I predict that the above code block will give us an output of only the odd values that are in the original array. Since we are using .filter() in our HOF, followed by modulo (% 2 not equal to 0) this should filter through the array and return only the odd values of [11, 13, 15]
// b) Verify and explain: My prediction was correct for the reasons explained in my answer. The filter() method ieterates through the array and returns only the odd values in that array because we are using (value % 2 !==0).


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])
// JavaScript

// a) Your answer:I predict that the above code block will output the value of our object's property of language indexed at 0, which is the string "JavaScript".
// b) Verify and explain: Ha! My prediction was correct, and I am actually impressed with myself for getting this one right. To elaborate on my thought process behind this prediction, I recognized that the above code block is an object with various properties and values. I can recall that when calling on an object's property, one must include the property name as an argument in our log, as stated in line 56. From our training with indexes, I also recalled that when there is a number inside a set of brackets [] in our log, this will call on the value indexed at the location of ths number within our object. I am not sure if I am explaining this correctly but this is how it made sense to me.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)
// Learn { student: 'George', cohort: 'Bravo', year: 2022 }

// a) Your answer: I predict that the above code block will output the following: George Bravo 2022
// b) Verify and explain: The outout was indeed what I predicted, however, it did include the entire object properties names and values within the output, which is something that I will keep in mind moving forward. I recognize the above code block to be a class, followed by an object of learnStudent, with the name value of George. The console log only lists the new object created, which is why I predicted it would include the name George in it. I honestly enjoyed this past weeks lesson on objects, classes, and class inheritance, and feel that I am getting more comfortable with being able to solve these types of challenges.
