const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
];
let candidateAnswers = [];

correctAnswer = "Sally Ride";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log("Welcome " + candidateName + "!");
}



function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  //candidateAnswer = input.question("Who was the first American woman in space? ");
  
  for (let i = 0; i < questions.length; i++) {
    let answer = input.question(questions[i]);
    candidateAnswers.push(answer);
  }
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  console.log(`Question 1\nCorrect Answer: ${correctAnswers[0]}\nYour answer: ${candidateAnswers[0]}\n `);
  console.log(`Question 2\nCorrect Answer: ${correctAnswers[1]}\nYour answer: ${candidateAnswers[1]}\n `);
  console.log(`Question 3\nCorrect Answer: ${correctAnswers[2]}\nYour answer: ${candidateAnswers[2]}\n `);
  console.log(`Question 4\nCorrect Answer: ${correctAnswers[3]}\nYour answer: ${candidateAnswers[3]}\n `);
  console.log(`Question 5\nCorrect Answer: ${correctAnswers[4]}\nYour answer: ${candidateAnswers[4]}\n `);

  /*
  if (correctAnswer === candidateAnswer) {
    console.log("That's correct!");
  } else {
    console.log("That's not right.");
  }
  */

  let grade;
  

  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};