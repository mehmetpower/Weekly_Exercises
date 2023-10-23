let ul;
let button;
let body;
let userInput;

function createToDo() {
  button = document.createElement('button');
  body = document.querySelector("body");
  ul = document.createElement('ul');
  button.textContent = 'Create ToDo';
  body.appendChild(button);
  body.appendChild(ul);
  button.addEventListener('click', function () {
    isItemValid();
    listator();
    sortList();
  });
}

createToDo();

function listator() {
  let li = document.createElement('li');
  li.textContent = `${userInput}  ---  `;
  
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete ToDo';
  deleteButton.addEventListener('click', function () {
    li.remove();
  });
  
  li.appendChild(deleteButton);
  ul.appendChild(li);
}

function isItemValid() {
  let message = 'Welcome to ToDo! Please make an input: ';
  do {
    userInput = prompt(message);
    message = 'Please make a valid input!';
  } while (userInput.length < 1) ;
  return true;
}

function sortList() {
  const liList = Array.from(ul.getElementsByTagName("li"));

  liList.sort(function (a, b) {
    const textA = a.textContent.toLowerCase();
    const textB = b.textContent.toLowerCase();
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }
    return 0;
  });

  ul.innerHTML = "";

  liList.forEach(function (li) {
    ul.appendChild(li);
  });
}
