const users = [{ username: "ToqaSameer", password: "Password123" }];

let currentQuestions = [];
let currentQuestionIndex = 0;

const questions = {
  chemistry: {
    easy: [
      {
        question: "What is H2O commonly known as?",
        options: ["Water", "Hydrogen", "Oxygen"],
        answer: "Water",
      },
      {
        question: "What is the chemical symbol for Sodium?",
        options: ["Na", "K", "Ca"],
        answer: "Na",
      },
    ],
    medium: [
      {
        question: "What is the pH level of water?",
        options: ["7", "14", "0"],
        answer: "7",
      },
      {
        question: "Which element has the atomic number 6?",
        options: ["Carbon", "Nitrogen", "Oxygen"],
        answer: "Carbon",
      },
    ],
    hard: [
      {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
        answer: "Nitrogen",
      },
      {
        question: "What is the chemical formula for Glucose?",
        options: ["C6H12O6", "H2O", "O2"],
        answer: "C6H12O6",
      },
    ],
  },
  physics: {
    easy: [
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "1,000 km/s"],
        answer: "300,000 km/s",
      },
      {
        question: "What is the force of gravity on Earth?",
        options: ["9.8 m/s²", "10 m/s²", "8.8 m/s²"],
        answer: "9.8 m/s²",
      },
    ],
    medium: [
      {
        question: "What is Newton's second law?",
        options: ["F=ma", "E=mc²", "V=IR"],
        answer: "F=ma",
      },
      {
        question: "What is the unit of energy?",
        options: ["Joule", "Watt", "Newton"],
        answer: "Joule",
      },
    ],
    hard: [
      {
        question: "What is the Heisenberg uncertainty principle?",
        options: [
          "You can't know position and momentum",
          "Energy cannot be created or destroyed",
          "For every action, there's an equal opposite reaction",
        ],
        answer: "You can't know position and momentum",
      },
      {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Molecule", "Electron"],
        answer: "Atom",
      },
    ],
  },
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (isValidUser(username, password)) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    startQuiz();
  } else {
    document.getElementById("error-message").innerText =
      "Invalid username or password.";
  }
}

function isValidUser(username, password) {
  if (
    username.includes(" ") ||
    username.includes("_") ||
    password.length < 8 ||
    !/[A-Z]/.test(password)
  ) {
    return false;
  }
  return users.some(
    (user) => user.username === username && user.password === password
  );
}

function startQuiz() {
  currentQuestions = getRandomQuestions();
  currentQuestionIndex = 0;
  showQuestion();
}

function getRandomQuestions() {
  const selectedTopic = Object.keys(questions)[Math.floor(Math.random() * 2)]; // Randomly select chemistry or physics
  const selectedLevel = ["easy", "medium", "hard"][
    Math.floor(Math.random() * 3)
  ]; // Randomly select level
  return questions[selectedTopic][selectedLevel];
}

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const question = currentQuestions[currentQuestionIndex];

  if (question) {
    questionContainer.innerHTML = `
            <h3>${question.question}</h3>
            ${question.options
              .map(
                (option) =>
                  `<button onclick="checkAnswer('${option}')">${option}</button>`
              )
              .join("")}
        `;
  } else {
    questionContainer.innerHTML = "<h3>Quiz Complete!</h3>";
    document.getElementById("next-button").style.display = "none";
  }
}

function checkAnswer(selectedOption) {
  const correctAnswer = currentQuestions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong Answer!");
  }
  currentQuestionIndex++;
  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  showQuestion();
}

function retry() {
  startQuiz();
}

function logout() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("error-message").innerText = "";
}
