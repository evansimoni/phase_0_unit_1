
  return median;
Welcome to Stypi!

Stypi is a realtime editor that allows multiple users to make changes to a single document at the same time. All you need to do is share the URL with others to begin collaborating!

This editor also supports programming languages that you can access by clicking on the "</>" button on the top left. For more information on how to use Stypi please click the FAQ link on the bottom left.

// My role in the group is: Translate user stories into pseudocode, Release 1

// Release 0 -Evan Simoni

// tests for sum
// The sum variable should be a function. It should be able to return the sum of the 
// oddLengthArray (27) and the evenLengthArray (43).

// tests for mean
// The mean variable should be a function. It should be able to return the average of the
// oddLengthArray (3.857142857142857) and the average of the evenLengthArray (5.375).

// tests for median
// The median variable should be a function. It should be able to return the median value of
// the oddLengthArray (4) and the median value of the evenLengthArray (5.5).


// Release 1 -Frank Shaw

// Summing Array:

make variable total
set initial counter i=0
totalOdd=totalOdd+ oddLengthArray[i]
increment i
end loop

make variable total
set initial counter i=0
totalEven=totalEven+ evenLengthArray[i]
increment i
end loop

// Finding Mean:

make variable meanOdd
Initialize counterOdd to 0
set counterOdd to length of oddLengthArray
set meanOdd = totalOdd/counterOdd

make variable meanEven
Initialize counteEven to 0
set countereEven to length of EvenLengthArray
set meanEven = totalEven/countereEven

// Finding Median:

Divide Counter by 2. 
If number != integer    //odd case
set medianCounter=floor number of (counter/2) //  not (counter/2) +1 because javascript is 0 indexed	
median=array[mediantCounter]
Else
set medianCounter[0]= (counter/2)-1    //even case
set medianCounter[1]= (counter/2)
	median=(array(medianCounter[0])+array(medianCounter[1]))/2
	
// Release 2,3,4, -Evan Simoni and Frank Shaw working togther on Skype and Stypi (our other group members did not participate)

// Summing Array:

function total(array) {
var sum=0;
  for (var i=0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

// Averaging Array

function mean(array) {
  var sum = 0;
  for (var i=0; i < array.length; i++) {
    sum = sum + array[i];
  }
  arrayLength = array.length;
  mean = sum/arrayLength;
  return mean;
}

// Median Array

function median(array) {
  if (array.length % 2 == 0) {   //Even Arrays
    rightMed = array[(array.length/2)];
    leftMed = array[(array.length/2)-1];  
    median = (leftMed + rightMed) / 2;
    return median;
  }
  else if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length/2)];
    return median;
  }
  else {
      return "Please enter valid array";
  }
}
