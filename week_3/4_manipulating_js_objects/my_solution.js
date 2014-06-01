
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown",
}



// __________________________________________
// Write your code below.
var adam = {}
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
terah.spouse.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines
// This challemge was particularily difficult for me to grasp at first. Maybe the instructions weren't clear or maybe I didn't
// understand what they meant but I ended up doing some reading before I could get started. W3C schools had a good description
// of object literal notation that led me to how tog et started with the assignment. I was confused for a long time by trying
// to read the verbal descriptions for each test, and finally realized that looking into the code needed to pass the test was
// much easier than trying to translate the words. It didn't help that the test points on the github page didn't match up 
// // with those that were in the file. I also got hung up at the poitn where I had to chain together multiple properties. I
// think the abstraction was more than I expected, and I was fuzzy on seperating the pieces of terminology (object, property, 
//   value). After worting my way through the test, I can say i feel confident with the learning properties, although it will
// take a lot more practice before I am 'comfortable' with them.


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)