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

while (i < 3) {
  // Display a question
  var question = document.createElement("h2");
  let questionText = quizQuestions[i]["1"];
  questionText = question.textContent;
  document.getElementsByTagName("h2").appendChild(questionText);

  // Display answer 1
  let answer1Text = quizQuestions[i]["2"];
  let answer1ForDisplay = document.getElementById("answer1Placeholder");
  answer1ForDisplay.innerText = answer1Text;

  // Display answer 2
  let answer2Text = quizQuestions[i]["3"];
  let answer2ForDisplay = document.getElementById("answer2Placeholder");
  answer2ForDisplay.innerText = answer2Text;

  // Testing the user input
  let score = 0;

    evalList[i]
    let userInp = prompt("Please enter your answer: A or B");
    console.log(userInp);
    let iterate = evalList[i][userInp];
    console.log(iterate);
    if (evalList[i] === true) {
      score += 100;
    } else {
      score -= 100;
    }
    console.log(score);
    document.getElementById("scorePlaceholder").innerText = score;

  i++; // Increment i
}
