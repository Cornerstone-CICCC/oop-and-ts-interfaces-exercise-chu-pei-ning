// Exercise 1: Types vs Interfaces
// Define a type and an interface for a "Person" object. The Person should have a name (string) and age (number).
// Then, create an object of each kind and log them to the console.

type PersonType = {
  name: string,
  age: number
};

interface PersonInterface {
  name: string,
  age: number
}

const person1: PersonType = { name: "Alice", age: 25 };
const person2: PersonInterface = { name: "Bob", age: 30 };

console.log(person1, person2);
// Expected Output: { name: "Alice", age: 25 }, { name: "Bob", age: 30 }