# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: The difference between parameter and argument in JavaScript functions is that parameter refers to the variables listed as part of our function definition, our scope, and argument refers to the values that are passed to the function when it is invoked, or called upon. From what I recall, parameters go in the first parenthesis in our function, and arguments go in the last parenthesis inside the invocation/call. For a parameter to work, it must have an argument.

  Researched answer: Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function. The parameters are properties of a function, while arguments are properties of a particular call to a function. Arguments are actual data assigned to the parameter.
  Source: W3 and Class notes.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: It is my understanding that the built-in method of .map() in JavaScript takes in various types of predefined parameters that include arrays, functions, and values. I believe the required parameters are functions, which are needed for iteration, and values, which will help the function be invoked. If there are no values, then there is no function being called.

  Researched answer: Based on my research, I was able to determine that the built-in method of .map takes in the predefined parameters of:
  function()- Required. A function to be run for each array element.
  currentValue-	Required. The value of the current element.
  index-	Optional. The index of the current element.
  array-	Optional. The array of the current element.
  thisValue- Optional. Default value undefined. A value passed to the function to be used as its this value
  In my answer, I completely missed index, and thisValue, which I imagine is used in classes? Will need to do more reading on this to become familiar on these other two types of parameters.
  Source: W3, Lecture Notes, and Syllabus.

3. What is the difference between map and filter?

  Your answer: The main difference between map and filter is that map is used when we need to invoke a function that will return an array of the same length as the original. Filter, on the other hand, is used when needing to invoke a function that iterates through every item in our array, and returns a subset of the array. We use filter when the question at-hand involves a conditional statement that requires only a subset of the array returned.  

  Researched answer: The .map() function iterates through an array and returns a new array of the same length. Map typically iterates through the specified array and returns a new array with the updated values. On the other hand, the filter function loops through an array and returns a new array with only the values that are true or the values that satisfy the stated condition. Filter will always return a subset of the given array. Filter takes a function as an argument, acts on arrays, iterates, returns an array, makes a decision about every item in the array, and returns a subset of the array.  
  Source: Class Notes, Udemy


4. What is the difference between a function and a method?

  Your answer: A function is a reusable block of code created to perform some specific set of tasks. A method is a function that is stored as an object property.

  Researched answer: Functions are reusable code machines that are created to perform a specific task and always produce an output. They are used for action in our code and are meant to be reusable and dynamic. A method is a property of an object that contains a function definition. Methods are functions stored as object properties. They consist of a code that can be called by the name of its object and its method name using proper dot notation or square bracket notation.
  Source: Class notes, W3, freecodecamp

5. What is object destructuring?

  Your answer: Object destructuring refers to the action of breaking down an objects' properties into individual, recallable variables.

  Researched answer: Object destructuring is a special way of assigning variables in JavaScript. They allow for an object's properties to be broken down into individual, recallable variables. Object destructuring starts with a variable keyword. It then lists the variable names with curly brackets, and uses the assignment operator to assign the object unpack. In other words, Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables.
  Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
  Being comfortable with object destructuring allows you to make quick work of extracting and manipulating object properties.
  Source: W3, Syllabus, Class Notes, and freecodecamp


6. STRETCH: What is hoisting in JavaScript?

  Your answer: I am not familiar with the meaning of this term in JavaScript.

  Researched answer: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). Variables defined with let and const are hoisted to the top of the block, but not initialized. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared. Using a let variable before it is declared will result in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until it is declared. Seeing as an advantage in that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether the scope os local or global.
  Source: W3, GeeksforGeeks.

 Hoisting allows functions to be safely used in code before they are declared. Source: Devmozilla



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance refers to the action of creating a class that will inherit the properties and methods from another class that already exists in our code. Class inheritance uses the keyword extend to acquire the properties and methods from the existing class to the new class, creating a Parent-Child class relationship.

2. React: React is a declarative, efficient, and flexible JavaScript library created by Facebook for building user interfaces.
This 'simple' tool allows us to develop web applications in which the front-end views are directly associated with the back-end data they receive.
There was a lot of information for me to narrow down, but this response I provided is a summary, in simple terms of what I could find.

3. React state: State in ReactJS, is a built-in object that is used to contain data or information about the component. This is where you store property values that belong to the component.
React components has a built-in state object.
The state object is where you store property values that belongs to the component.
When the state object changes, the component re-renders. For reference, here is an example of the state Object : Must specify the state object in the constructor method as follows:
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

4. React lifecycle methods: Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting. There was tons of information elaborating on each phase with lots of details on exactly which methods correspond to each phase.
The first phase is Mounting, which means putting elements into the DOM, which I will elaborate on further in the question below. The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props. The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

5. DOM: DOM stands for Document Object Model. It is the data representation of objects that compromise the structure and content of a document on the web. The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs such as JavaScript can change the document structure, style, and content. The DOM is built using multiple APIs that work together.

Also, the DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

Im excited to learn more about React this upcoming week and see how the DOM is utilized to manipulate the components of a web page. After conducting the above research I feel as though there is a lot more to uncover regarding React and how it used in today's world.
