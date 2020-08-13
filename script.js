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

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');


//Bind method: doesn't immedietly call the function but instead it generates a copy of the function that it can be stored somewhere.
//the bind method allows us to preset arguments for a function/method which is known as a technique called currying.
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');




var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

// console.log(arrayCalc(years, calculateAge));

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);