// Closures:
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
  }
} else if (job === 'teacher') {
  return function(name) {
  console.log('What subject do you teach ' + name + '?');
  }
} else {
  return function(name) {
    console.log('Hello ' + name + ', what do you do?');
  }
}
}

interviewQuestion('designer')('Caleb');


// Function constructor

// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1989, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// var Vehicle = function (make, model, bodyColor, manufactureYear) {
//   this.make = make;
//   this.model = model;
//   this.bodyColor = bodyColor;
//   this.manufactureYear = manufactureYear;
// }

// Vehicle.prototype.calcCarsAge = function () {
//   this.carsAge = 2020 - this.manufactureYear;
//   return this.carsAge;
// }

// var calebsCar = new Vehicle('Ford', 'Bronco', 'blue', 1995);

// console.log(calebsCar.calcCarsAge());

// console.log(calebsCar.carsAge);


/*******************************
 * Bind, Call, and Apply
 */

// var john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function (style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//     }
//   }
// }

// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };

// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'afternoon');


// //Bind method: doesn't immedietly call the function but instead it generates a copy of the function that it can be stored somewhere.
// //the bind method allows us to preset arguments for a function/method which is known as a technique called currying.
// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');




// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2020 - el;
// }

// function isFullAge(limit, el) {
//   return el >= limit;
// }

// // console.log(arrayCalc(years, calculateAge));

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);



/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

//Expert level:
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

var Question = function(consoleQuestion, answerArry, correctAnswer) {
  this.consoleQuestion = consoleQuestion,
  this.answerArry = answerArry,
  this.correctAnswer = correctAnswer;
}


var footballAnswers = ['yes', 'no', 'yes but only some conferences'];
var fallFootballQ = new Question('Will football be played in the US this fall?', footballAnswers, footballAnswers[2]);
console.log(fallFootballQ.consoleQuestion);