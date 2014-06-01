// This is a solo challenge

// Design your mission ---------------

// Objects: Knight, Princess, Ogre, Bridge, River

// Objectives:
// 1) Get across the bridge
// 2) Get the princess to safety
// 3) Cut down the bridge
// 4) Drown the Ogre

// My knight will get the attention of a nearby ogre who is harassing a princess. The knight tells the princess to follow
//  him across a nearby bridge spanning a river. The ogre is slow but follows and is the last in the line crossing the bridge.
// When the princess and the knight have crossed, the knight cuts down the bridge and the ogre falls into the water.

// Methods
// Yell (Knight)
// Run Right (Knight and Princess)
// Waddle Right (Ogre)
// Chop/Attack (Knight)
// Drown (Ogre)

// Pseudocode ------------------

// define Yell
// define runRight
// define waddleRight
// define chop
// define drown

// Knight Object
// Speed 10
// Health 100

// Princess Object
// Speed 9
// Health 100

// Ogre Object
// Speed 5
// Health 200

// Bridge Object
// Health 1000

// Initial Code ---------------
function yell() {
	console.log('Princess! Come with me! Run!')
}
function runRight() {
	this.xposition +10;
}
function waddleRight() {
	this.xposition +10;
}
function chop() {
	this.damage +1000;
}
function drown() {
	this.health -1000;
}
var knight = {
	speed: 10,
	health: 100
}
var princess = {
	speed: 9,
	health: 100
} 
var ogre = {
	speed: 5,
	health: 200
}
var bridge = {
	health: 1000;
}

// Refactored Code --------------
// I can't find anything to refactor :(

// Reflection -----------------------
// This challenge has been terribly confusing. I felt lost for most of the time because the
// directions aren;t clear. I think this challenge would be better if there were more restrictions
// imposed--I just feel like there are too many directions to take and I have my doubts about 
// whether anyting I made here is correct or workable in a game on codecombat. It also doesn't help
// that codecombat is not totally transparent about how the pieces of the game interact. I'm not at all
// sure if anything I did in the challenge could be used to create the game I have envisioned, there 
// just hasn;t been enough instruction or examples for me to have figured it out at the point. I had tons
// of questions while working on this, primarily 'what am I doing' XD. I'm alos wondering if I created
// enough functions and objects to make my game work within the context of codecombat. I'm curious to
// understand if my objects need more properties and how I would make them interatc with the methods I
// have written (or still need to write)