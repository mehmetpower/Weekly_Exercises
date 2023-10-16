document.write("<p>Hello</p>");
let loop = true;

function gcdFinder() {
  let input1, input2;
  while (loop) {
    input1 = prompt("Put in your first positive number: ");
    if (input1 === null || input1 === "" || isNaN(input1) || input1 < 1 || input1.includes('.')) {
      continue;
    } else {
      break;
    }
  }
  while (loop) {
    input2 = prompt("Put in your second positive number: ");
    if (input2 === null || input2 === "" || isNaN(input2) || input2 < 1 || input2.includes('.')) {
      continue;
    } else {
      break;
    }
  }
  return calculateGCD(Number(input1), Number(input2));
}

function calculateGCD(input1, input2) {
  if (input1 < input2) {
    [input1, input2] = [input2, input1];
  }

  while (input2 !== 0) {
    const remainder = input1 % input2;
    input1 = input2;
    input2 = remainder;
  }
  return input1;
}

let result = gcdFinder();
document.write("<p>GCD: " + result + "</p>");
