// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Evan Simoni
//  2. Alex Birdsall

// 0. "YOU SIGNED... WHO?!"
var clients = [{name: "Arnold Schwarzenegger", age: 60, quote: "Get to da choppa!"}, {name: "Luke Skywalker", age: 22, quote: "You killed my father!"}];

// 1. "Here they Come!"
var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");

var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?");

var jimCarrey = new Client("Jim Carrey", 52, "So you're telling me there's a chance?");

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.showQuote = function() {
  console.log(quote);
  }
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 3. "SHOW 'EM OFF!"
var display = function()
{
    for (var i=0; i < Clients.length; i++)
    {
        console.log("My client's name is " + newClients[i].name + ", and he/she is " + newClients[i].age + " years old. Their quote, \"" + newClients[i].quote + "\" is so famous it doesn't need attribution.")
    }
}
display();

// 4. "But wait, there's more!"
adamSandler.showQuote();

// 5.  ** BONUS **
function Client(name, age, quote, firstMovie) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.firstMovie = firstMovie;
  this.showQuote = function() {
  console.log(quote);
  }
}
var woody = new Client("Woody", 27, "There's a snake in my boot!", "Toy Story");

//  6.  Your Reflection:
// This GPS was particularily challenging because mine was on Wednesday and I had not allowed myself 
// ample time to work on the other JS assignments. I had done some reading but I was largely unfamiliar
// with what I had to know and did not feel ready. We started off alright but I quickly fell behind on
// the knowledge and Alex ended up doing a lot of the driving and navigating. I unfortuntely became a
// passenger in the car when it came to writing stuff to pass the test code and creating a new function.
// Despite the fact that I was googling for syntax checks I think I was a little distracted by the fact
// that I was under a time limit and someone else was relying on me to keep up. I regrettably didn't
// speak up when I should have said I needed more time to undersand what was being written. I shied away
// from it because I didn't want to slow down the session.


