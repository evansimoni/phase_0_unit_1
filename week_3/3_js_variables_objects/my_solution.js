// I paired [by myself] on this challenge.

// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ['John', 'Joseph', 'Jesus', 'Mary'];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I approached this one with caution since a lot of the JS code was foreign to me, not
// mention the concept of TDD. Even after working through this exercise I'm unsure of how I
// would implement TDD into a project of my own. I don't understand how it could be used in
// practice. My strategy for solving this challenge was to look at the test items one by one
// and then write code that satified their requirements. I tested my code every time I modified
// it, then went on to satify the next requirement. Some of my questions about how TTD work
// were satisfied after practicing with and studying the code below. I feel like I satisfied
// the learning competencies. Going through all the required reading definitely helped out in
// understanding the these competencies.

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

