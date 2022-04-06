// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe ("multBy3", () => {
  it ("takes in an array of numbers and returns an array with all the numbers multipled by 3.", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    const numbersArray2 = [24, 27, 30, 33, 36]
    expect (multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect (multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})
// Successful failure :
// ● multBy3 › takes in an array of numbers and returns an array with all the numbers multipled by 3.
//
//    ReferenceError: multBy3 is not defined

// b) Create the function that makes the test pass.
// Pseudo Code
// Input will be an array of numbers
// Iterate on the array
// Use .map () to iterate
// Multiply the value inside of the map by 3
// Output an array with all number multiplied

const multBy3 = (array) => {
  return array.map(value => value * 3)
}
// Successful Test Result
// PASS  ./code-challenges.test.js
//  multBy3
//    ✓ takes in an array of numbers and returns an array with all the numbers multipled by 3. (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const num1 = 15
// // Expected output: "15 is divisible by three"
// const num2 = 0
// // Expected output: "0 is divisible by three"
// const num3 = -7
// // Expected output: "-7 is not divisible by three"

describe ("divBy3", () => {
  it ("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
    const num1 = 15
    const num2 = 0
    const num3 = -7
    expect (divBy3(num1)).toEqual("15 is divisible by three")
    expect (divBy3(num2)).toEqual("0 is divisible by three")
    expect (divBy3(num3)).toEqual("-7 is not divisible by three")
  })
})
// Successful Failure
// ● divBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not.
//
//   ReferenceError: divBy3 is not defined

// b) Create the function that makes the test pass.
// Pseudo Code
// Create a function
// Conditional statement to determine if numbers are divisible by 3 (if/else)
// Output should be a string stating whether number is divisible by 3

const divBy3 = (number) => {
  if (number % 3 === 0){
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}
// console.log (divBy3(num1))
// console.log (divBy3(num2))
// console.log (divBy3(num3))

// Succesful Test Result
// multBy3
//    ✓ takes in an array of numbers and returns an array with all the numbers multipled by 3. (1 ms)
//  divBy3
//    ✓ takes a number as an argument and decides if the number is evenly divisble by three or not.
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
//
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe ("capsOnly", () => {
  it ("takes in an array of words and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    expect (capsOnly(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect (capsOnly(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
// Successful Failure
// capsOnly › takes in an array of words and returns an array with all the words capitalized.
//
//     ReferenceError: capsOnly is not defined

// b) Create the function that makes the test pass.
// Pseudo Code
// Create a function called capsOnly
// Function takes in input of array
// Will need to use .map() to get an array of the same length returned
// Will need to use .charAt() to target first letter of every word in the array, followed by toUpperCase() to capitalize and lastly, .slice(index) to join the remainder letters of each word in the array
// Return should be an array with only first letter of each word capitalized

const capsOnly = (array) => {
    return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
}
// console.log(capsOnly(randomNouns1))
// console.log(capsOnly(randomNouns2))

// Test Result- Passed
// multBy3
//   ✓ takes in an array of numbers and returns an array with all the numbers multipled by 3. (2 ms)
// divBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not.
// capsOnly
//   ✓ takes in an array of words and returns an array with all the words capitalized. (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

describe ("vowelIndex", () => {
  it ("takes in a string and logs the index of the first vowel.", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    expect (vowelIndex(vowelTester1)).toEqual(1)
    expect (vowelIndex(vowelTester2)).toEqual(0)
    expect (vowelIndex(vowelTester3)).toEqual(2)
  })
})
// Successful Failure
// ● vowelIndex › takes in a string and logs the index of the first vowel.
//
//   ReferenceError: vowelIndex is not defined


// b) Create the function that makes the test pass.
// Pseudo code
// Create a function that takes in a string and logs the index of the first vowel
// Input is a string- need to use an array to determine indexof --> create new variable with just vowels in an array called vowels
// Will need function to iterate each letter in the string and determine whether it is a vowel or not-> for loop? and .length
// Will need an if statement to compare index value
// return index of first vowel of each word
// Expected output : 1 , 0, 2
// Note for Instructor: This challenge question took me over an hour to figure out, and I am still a bit confused on the function portion below. I had several classmates help me work through the remainder of the challenge once I got stuck after my if statement, around line 199 or so. I also tried using all of my resources through google but for some reason it was really difficult to find concrete instructions on how to solve this problem.

const vowelIndex = (value) => {
  let foundIndexes = []
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < value.length ; i++) {
    if (vowels.indexOf(value[i]) > -1){
      foundIndexes.push(i);
    }
  }
  return foundIndexes.sort()[0]
}
// console.log(vowelIndex(vowelTester1))
// console.log(vowelIndex(vowelTester2))
// console.log(vowelIndex(vowelTester3))

// Succesful Test Result
// multBy3
//   ✓ takes in an array of numbers and returns an array with all the numbers multipled by 3. (1 ms)
// divBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not.
// capsOnly
//   ✓ takes in an array of words and returns an array with all the words capitalized.
// vowelIndex
//   ✓ takes in a string and logs the index of the first vowel.
//
// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
