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

function makeCaseInsensitive(candidateAnswers) {
  let placeholder = "";
  let holder = [];

  for (let i = 0; i < candidateAnswers.length; i++) {
    placeholder = candidateAnswers[i].toLowerCase();
    holder.push(placeholder);
  }

  return holder;
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < candidateAnswers.length; i++) {
    console.log(`${i + 1}) ${questions[i]}\nCorrect Answer: ${correctAnswers[i]}\nYour answer: ${candidateAnswers[i]}\n `);
  }
  // console.log(`1) ${questions[0]}\nCorrect Answer: ${correctAnswers[0]}\nYour answer: ${candidateAnswers[0]}\n `);
  // console.log(`Question 2\nCorrect Answer: ${correctAnswers[1]}\nYour answer: ${candidateAnswers[1]}\n `);
  // console.log(`Question 3\nCorrect Answer: ${correctAnswers[2]}\nYour answer: ${candidateAnswers[2]}\n `);
  // console.log(`Question 4\nCorrect Answer: ${correctAnswers[3]}\nYour answer: ${candidateAnswers[3]}\n `);
  // console.log(`Question 5\nCorrect Answer: ${correctAnswers[4]}\nYour answer: ${candidateAnswers[4]}\n `);

  /*
  if (correctAnswer === candidateAnswer) {
    console.log("That's correct!");
  } else {
    console.log("That's not right.");
  }
  */

  correctAnswers = makeCaseInsensitive(correctAnswers);
  //console.log(correctAnswers);
  candidateAnswers = makeCaseInsensitive(candidateAnswers);
  //console.log(candidateAnswers);

  let grade = function(candidateAnswers, correctAnswers) {
    let tally = 0;
  
    for (let i = 0; i < candidateAnswers.length; i++) {
      if (candidateAnswers[i] === correctAnswers[i]) {
        tally += 1;
      }
    }

    let percentage = tally / 5 * 100;

    if (percentage >= 80) {
      console.log(`>>> Overall Grade: ${percentage}% (${tally} of 5 responses correct) <<<\n>>> Status: PASSED <<<`);
    } else {
      console.log(`>>> Overall Grade: ${percentage}% (${tally} of 5 responses correct) <<<\n>>> Status: FAILED <<<`);
    }
  }
  
  return grade(candidateAnswers, correctAnswers);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  // console.log(makeCaseInsensitive(candidateAnswers));
  // console.log(makeCaseInsensitive(correctAnswers));
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