const quizQuestions = [
  {
    1: "Text of question 1",
    2: "A: Answer A to Q1",
    3: "B: Answer B to Q1",
  },
  {
    1: "Text of question 2",
    2: "A: Answer A to Q2",
    3: "B: Answer B to Q2",
  },
  {
    1: "Text of question 3",
    2: "A: Answer A to Q3",
    3: "B: Answer B to Q3",
  },
];

let evalList = [
  {
    a: true,
    b: false,
  },
  {
    a: false,
    b: true,
  },
  {
    a: true,
    b: false,
  },
];

let i = 0;
let score = 0;
let form;
let scoreDisplay;

function displayQuestion(index) {
  if (index < quizQuestions.length) {
    // Create a form for the current question
    form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    let body = document.querySelector("body");

    // Display the current question
    let question = document.createElement("h2");
    question.textContent = `${quizQuestions[index]["1"]}`;
    form.appendChild(question);

    // Create radio buttons for answers
    let answer1 = document.createElement("input");
    answer1.type = "radio";
    answer1.name = `answer${index}`;
    answer1.value = "a";
    answer1.id = `answer${index}_a`;

    let label1 = document.createElement("label");
    label1.htmlFor = `answer${index}_a`;
    label1.textContent = `${quizQuestions[index]["2"]}`;
    form.appendChild(answer1);
    form.appendChild(label1);

    let answer2 = document.createElement("input");
    answer2.type = "radio";
    answer2.name = `answer${index}`;
    answer2.value = "b";
    answer2.id = `answer${index}_b`;

    let label2 = document.createElement("label");
    label2.htmlFor = `answer${index}_b`;
    label2.textContent = `${quizQuestions[index]["3"]}`;
    form.appendChild(answer2);
    form.appendChild(label2);

    // Create a submit button for the form
    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    // Append the form to the body
    body.innerHTML = ""; // Clear the body
    body.appendChild(form);

    // Display the score
    if (!scoreDisplay) {
      scoreDisplay = document.createElement("p");
      body.appendChild(scoreDisplay);
    }
    scoreDisplay.textContent = `Score: ${score}`;
  } else {
    // Display the final score
    const finalScore = document.createElement("h2");
    finalScore.textContent = `Your final score: ${score}`;
    document.querySelector("body").appendChild(finalScore);
  }
}

displayQuestion(i);

// Event handler for form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userAnswer = formData.get(`answer${i}`);

  let iterate = evalList[i][userAnswer];
  if (iterate === true) {
    score += 100;
  } else {
    score -= 100;
  }
  // Display the updated score
  scoreDisplay.textContent = `Score: ${score}`;

  i++; // Increment i to move to the next question
  displayQuestion(i);
}
