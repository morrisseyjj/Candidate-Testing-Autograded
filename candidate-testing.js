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
let correctAnswer5 = ("3"); // try ("3" || "three")
// Put Questions and Answers into the Arrays "questions", "correctAnswer" and create "candidateAnswer" array
questions = [question1, question2, question3, question4, question5];
correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5]
candidateAnswers =  [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name. "); 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // USE a FOR LOOP
  for (let i = 0; i < questions.length; i++){
    candidateAnswers.push(userAnswer = input.question(questions[i]));
    console.log(`Your Answer: ${userAnswer} \nCorrect Answer: ${correctAnswers[i]}\n`);
  }
}

function gradeQuiz(candidateAnswers) {
//// Initiate variables for "grade" expression
  let numberOfQuizQuestions = questions.length;
  let numberOfCorrectAnswers = 0;
  let status = "";
//// Change all to lower case
  let lowerCaseCandidateAnswers = [];
  let lowerCaseCorrectAnswers = [];
//// Change CANDIDATE Answers to Lower Case
  for (let i = 0; i < candidateAnswers.length; i++) {
    lowerCaseCandidateAnswers.push(candidateAnswers[i].toLowerCase());
  }
//// Change CORRECT Answers to Lower Case
  for (let i = 0; i < candidateAnswers.length; i++) {
    lowerCaseCorrectAnswers.push(correctAnswers[i].toLowerCase());
  }
//------------------------------------
// Checks Candidate's answers with the Correct answers 1 by 1 and for each correct answer adds 1 to numberOfCorrectAnswers
  for (let i = 0; i < candidateAnswers.length; i++){
    if (lowerCaseCandidateAnswers[i] === lowerCaseCorrectAnswers[i] ){
      numberOfCorrectAnswers += 1;
    }
  }
   //TODO 3.2 use this variable to calculate the candidates score.
  let grade = (numberOfCorrectAnswers) / (numberOfQuizQuestions) * 100;
    if (grade >= 80){
      status = "PASSED"
    } else {
      status = "FAILED"
    }

  console.log(`Your grade is a ${grade}%. `);
  console.log(`You have ${status}.`);
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
