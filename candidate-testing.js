const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName 
// Declare this variable as an empty string
candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];
// Questions Variables
let question1 = ("Who was the first American woman in space? ");
let question2 = ("True or false: 5 kilometer == 5000 meters? ")
let question3 = ("(5 + 3)/2 * 10 = ? ");
let question4 = ("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
let question5 = ("What is the minimum crew size for the ISS? ");

// Answer Variables
let correctAnswer1 = ("Sally Ride");
let correctAnswer2 = ("true");
let correctAnswer3 = ("40");
let correctAnswer4 = ("Trajectory");
let correctAnswer5 = ("3");
// Put Questions and Answers into the Arrays "questions", "correctAnswer" and "candidateAnswer"
questions = [question1, question2, question3, question4, question5];
//console.log(questions);
correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5]
//console.log(correctAnswers);


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name. "); 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // USE a FOR LOOP
  for (let i = 0; i < questions.length; i++){
    candidateAnswer = input.question(questions[i]);
    console.log(`Your Answer: ${candidateAnswer} \nCorrect Answer: ${correctAnswers[i]}\n`);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //James comment: PART 2 CODE for 1.2c is included in the FOR LOOP in 1.2b
  //James comment: PART 1 CODE is below
  // if (candidateAnswer == correctAnswer){
  //   console.log(`Your Answer: ${candidateAnswer} Your Answer: ${correctAnswer}`);
  // } else {
  //     console.log("Sorry, that is incorrect.");
  // }
    

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome! " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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
