fetch("https://opentdb.com/api.php?amount=10")
  .then(response => response.json())
  .then(json => {
    const questions = json.results;
    const mainTag = document.querySelector("main");
    questions.forEach((questionObj, index) => {
        const h2Tag = document.createElement("h2");
        h2Tag.innerHTML = questions[0].question;
        mainTag.appendChild(h2Tag);

        const ulTag = document.createElement("ul");
        mainTag.appendChild(ulTag);
        questions[0].incorrect_answers.forEach((answer, index) => {
        const liTag = document.createElement("li");
        ulTag.appendChild(liTag);

        const inputTag = document.createElement("input");
        inputTag.id = "answer"+index;
        inputTag.name = inputTag.id;
        inputTag.type = "radio;"
        inputTag.value = questions[0].correct_answer;
        liTag.appendChild(inputTag);

        const labelTag = document.createElement("label");
        labelTag.setAttribute("for", "answer"+questions[0].incorrect_answers.length);
        labelTag.innerText = answer;
        
        liTag.appendChild(labelTag);

        });
      });
  });
