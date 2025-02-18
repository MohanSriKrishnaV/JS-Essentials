function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function() { // Method defined inside the constructor
      return "Hello, my name is " + this.firstName + " " + this.lastName;
    };
  }

  const john = new Person("John", "Doe", 30);
const jane = new Person("Jane", "Smith", 25);

console.log(john.firstName); // Output: John
console.log(jane.greet());   // Output: Hello, my name is Jane Smith




function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound.");
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor to set the name
    this.breed = breed;
  }
  
  // Inherit from Animal:
  Dog.prototype = Object.create(Animal.prototype);  // Crucial step for inheritance
  Dog.prototype.constructor = Dog; // Reset constructor (important!)
  Dog.prototype.bark = function() {
    console.log("Woof!");
  };
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  myDog.speak(); // Output: Buddy makes a sound.
  myDog.bark();  // Output: Woof!
  
  console.log(myDog instanceof Dog);      // true
  console.log(myDog instanceof Animal);   // true (because Dog inherits from Animal)