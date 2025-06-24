const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats", "None"],
    answer: "Hypertext Markup Language"
  }
];

let currentIndex = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").textContent = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = opt;
    div.onclick = () => {
      if (opt === q.answer) score++;
      nextQuestion();
    };
    optionsContainer.appendChild(div);
  });
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `
      <div id="score-box">
        <h2>Quiz Finished!</h2>
        <p>Your score: ${score} / ${questions.length}</p>
        <button onclick="location.reload()">Play Again</button>
      </div>
    `;
  }
}

// Start the quiz
showQuestion();
