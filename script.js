// Function constructor

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1989, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var Vehicle = function (make, model, bodyColor, manufactureYear) {
  this.make = make,
    this.model = model,
    this.bodyColor = bodyColor,
    this.manufactureYear = manufactureYear;
}

Vehicle.prototype.calcCarsAge = function () {
  this.carsAge = 2020 - this.manufactureYear;
  return this.carsAge;
}

var calebsCar = new Vehicle('Ford', 'Bronco', 'blue', 1995);

console.log(calebsCar.calcCarsAge());

console.log(calebsCar.carsAge);