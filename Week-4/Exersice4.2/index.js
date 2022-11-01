/* Exercise4.2:
Create an object called Teacher derived from the Person class,
 and implement a method called teach which receives a string called subject
*/

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach

var Teacher = function () {
  this.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
  };
};
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Zaid", 45);
him.teach("Inheritance");

him.initialize("Sharma", 30);
him.teach("Javascript");
