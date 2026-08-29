// Step 1: Create the questions array
const questions = [
  {
    category: "Math",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which ocean is the largest?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Programming",
    question: "Which language runs in a web browser?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  }
];


// Step 2: getRandomQuestion
function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}


// Step 3: getRandomComputerChoice
function getRandomComputerChoice(choicesArray) {
  const index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
}


// Step 4: getResults
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}