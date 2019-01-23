// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const faveFood = "sweet potatoes";

function shareFaveFood() {
  return (`My favorite food is ${faveFood}!`);
}

console.log(shareFaveFood());


// ==== Challenge 2: Create a counter function ====
const counter = (count => {
  return () => {
    return count++;
  }
})(0);
  // Return a function that when invoked increments and returns a counter variable.
  
counter();

console.log(counter());
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = ((num) => {
  
//   return {
//     increment: () => {
//       return ++num;
//     },
//     decrement: () => {
//       return --num;
//     },
//     result: () => {
//       return num;
//     }
//   }
// })(0);

const counterFactory = () => {
  let count = 0

  return {
    increment: () => ++count,
    decrement: () => --count
  }
}

const newCounterFactory = counterFactory();

newCounterFactory.increment(); //?
newCounterFactory.increment(); //?
newCounterFactory.increment(); //?

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.


