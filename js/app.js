'use strict'
// TODO: ask the user's name.

// TODO: Ask 5 y/n questions.
let answerOne = prompt("Am I happy?");
let answerOneLower = answerOne.toLowerCase();

// use if / else
// if 'y' then your are correct
if(answerOneLower === 'y' || 
   answerOneLower === 'yes'){
  // alert("You are correct")
  console.log("You are correct!");
} else {
  // alert("You are incorrect")
  // if 'n' then your are incorrect
  console.log("You are incorrect!");
}

// TODO: Give a response with an alert to
//       notify the use if they are correct.