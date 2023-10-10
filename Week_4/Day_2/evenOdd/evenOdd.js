let loop = true;
let numberInp
let output

while (loop) {
  let numberInp = prompt("Please input a number between 0 and 20: ");
  if (numberInp.length === 0) {
    continue
  } else if (numberInp == 0) {
    output = `${numberInp} is an even number.`;
    break;
  } else if ((numberInp >= 0 && numberInp <= 20 && numberInp !== 0 && Number.isInteger(numberInp))) {
    output = numberInp % 2 == 0 ? `${numberInp} is an even number.` : `${numberInp} is an odd number.`;
    break;
  } else {
    continue
  }
}

document.write(`<p>${output}</p>`);