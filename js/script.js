const questions = [
  {
    question: "what is the correct way to declare a variable in Javascript?",
    answers: ["varx=10;","let x-> 10","x :=10;"],
    correct: 0,
    animation:"bounce",
  },
  
  {
    question: "which loop runs at least once?.",
    answers: ["for loop", "while loop", "do-while loop"],
    correct: 2,
    animation:"spin",
  },
  {
    question: "Which loop is called as iterative loop?",
    answers: ["for loop", "do-while loop", "while loop"],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let points = 0;

// Event listeners
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('next-level').addEventListener('click', nextQuestion);

function startGame() {
  document.getElementById('welcome').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('animated-question').innerText = "Question " + (currentQuestionIndex + 1);
  document.getElementById('level-name').innerText = currentQuestionIndex + 1;
  document.getElementById('level-description').innerText = currentQuestion.question;

  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';

  currentQuestion.answers.forEach((answer, index) => {
    const button = createAnswerButton(answer, index);
    answersContainer.appendChild(button);
  });
}

function createAnswerButton(answer, index) {
  const button = document.createElement('button');
  button.innerText = answer;
  button.classList.add('answer-btn');
  button.addEventListener('click', () => checkAnswer(index));
  return button;
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correct) {
    points++;
    document.getElementById('points').innerText = points;
    alert("Correct!");
  } else {
    alert("Wrong answer. Try again!");
  }
  document.getElementById('next-level').classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById('next-level').classList.add('hidden');
  } else {
    alert("You've completed the quiz! Your total points: " + points);
    resetGame();
  }
}

function resetGame() {
  currentQuestionIndex = 0;
  points = 0;
  document.getElementById('points').innerText = points;
  document.getElementById('welcome').classList.remove('hidden');
  document.getElementById('game').classList.add('hidden');
}