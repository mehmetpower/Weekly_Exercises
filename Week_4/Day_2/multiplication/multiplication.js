let number
let string
const times = 9
let loop = true

while (loop) {
  let string = prompt("Please input a number between 0 and 1011: ");
  let number = Number(string);
  if (string.length < 1) {
  }
  else if (number < 0 || number > 10) {
  }
  else if (!Number.isInteger(number)){
  }
  else {
    output = `${number} * ${times} =  ${number * times} `;
    break;
  }
}

document.write(`<p>${output}</p>`);
