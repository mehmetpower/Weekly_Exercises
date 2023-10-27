const quizQuestions = [
  {
      1: "Text of question 1",
      2: "A: Answer A to Q1",
      3: "B: Answer B to Q1"
  },
  {
      1: "Text of question 2",
      2: "A: Answer A to Q2",
      3: "B: Answer B to Q2"
  },
  {
      1: "Text of question 3",
      2: "A: Answer A to Q3",
      3: "B: Answer B to Q3"
  }
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
while (i < quizQuestions.length-2) {
  // Display a question
  let question = document.createElement("h2");
  let body = document.querySelector("body");
  question.textContent = `${quizQuestions[i]["1"]}`;
  body.appendChild(question);

  // create answers list
  // answer-1
  let ul = document.createElement("ul");
  let answer1 = document.createElement("li");
  answer1.textContent = `${quizQuestions[i]["2"]}`;
  console.log(answer1);
  ul.appendChild(answer1);
  console.log(ul);

  // answer-2
  let answer2 = document.createElement("li");
  answer2.textContent = `${quizQuestions[i]["3"]}`;
  console.log(answer2);
  ul.appendChild(answer2);
  console.log(ul);

  body.appendChild(ul);

  // Testing the user input

  
  let userInp = prompt("answer?");
  iterate = evalList[i][userInp];
  if (iterate === true) {
    score += 100;
  } else {
    score -= 100;
  }
  console.log(score);

  i++;
}
