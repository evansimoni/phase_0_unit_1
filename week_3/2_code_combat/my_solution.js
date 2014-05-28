// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// ---Rescue Mission---
// move down x2
// move right
// move up x2
// move right x2
// move down
// attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

 
// ---Grab The Mushroom---
// move up
// move right
// move left
// move up
// attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// ---Drink Me---
// attack
// move right
// move down
// move up
// move right
// attack

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// ---Taunt The Guards---
// move right
// distract Guards
// move right x2
// move up
// move right
// distract Guards
// move down
// move right
// move up
// move right

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// ---Its A Trap---
// move down x2
// distract Ogre
// move up x2

this.moveDown();
this.moveDown();
this.say("Hey!");
this.moveUp();
this.moveUp();

// ---Break The Prison---
// if enemy name return false x4
// if friend name return true x5

if(name === "Krogg")
    return false;
if(name === "Brack")
    return false;
if(name === "Gort")
return false;
if(name === "Grul'thock")
return false;
if(name === "Gordon")
    return true;
if(name === "Lucas")
    return true;
if(name === "Marcus")
    return true;
if(name === "Robert")
    return true;
if(name === "William")
    return true;

// ---Taunt---
// taunt x4

this.say("Hey!");
this.say("Yo!");
this.say("Yeah!");
this.say("Yeah you MF!");

// ---Cowardly Taunt---
// move to center
// yell
// retreat to towers

this.moveXY(50, 30);
this.say("Hey!");
this.moveXY(70, 10); 

// ---Commanding Followers---
// move to soldiers
// command soldiers to follow
// move toward enemies
// command soldiers to attack
// retreat to buildings

this.moveXY(75, 63);
this.say("Hail, friends! Follow me!");
this.moveXY(57,45);
this.say("Attack!");
this.moveXY(75,63);

// ---Mobile Artillery---
// move artillery down
// shoot
// move artillery right
// shoot 2x
// move artillery up
// shoot 2x

this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(55,35);
this.attackXY(69,57);
this.attackXY(62,42);
this.moveXY(50, 40);
this.attackXY(48,66);
this.attackXY(48,55);

// Questions
// What is this referring to? Think programming-wise rather than in the terms of the game.
// 	The 'this' is reffering to the object itself. It is used to call functions on the target object.
// What does the () do in JavaScript?
// 	The parentheses in JS servce to denote the end of a function name. Within the parentheses there can be parameters that are passed into the function's block.
// What is the point of the semicolons?
// 	The semicolon is used to seperate statements on the same line. It isn't necessary when code is written on multiple lines but this could become problematic when minified. It is good practice to end statements with a semicolon.

// Reflection:
// Write your reflection here.

// "This challenge was pretty straightforward. I enjoyed playing the game but I
// don't think it did a lot to teach me much JS syntax. I felt like all I had to
// do was pick up on the patterns of code and replicate them myself. This was a
// piece of cake. The whole time I was working through the levels I was curious
// about how the 'this' part of the code worked. I have a feeling it applies to
// the object it is referencing but it didn't become clear because it was never
// explicitly explained. I don't feel very confident about having achieved the 
// objectives on this one. I would feel more confident if I had some reading
// to go along with the game to explain the context of what I'm working with. I
// enjoyed the game but typing repetitive code became tedious."
