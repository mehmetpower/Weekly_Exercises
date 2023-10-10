let birthYear = "";
let futureYear = "";

        do {
        {birthYear = +prompt("My Birth Year: ");
        console.log(birthYear);
        }
        } while (isNaN(birthYear) || birthYear === 0);
        do {
        {futureYear = +prompt("Future Year: ");
        console.log(futureYear);
        }
        } while (isNaN(futureYear) || futureYear === 0);

        let age = futureYear - birthYear;
        let message = `I will be either ${age - 1} or ${age} in ${futureYear}.`
        document.write(`<p>${message}</p>`);

/*let number = +prompt("Number: ");

if (number % 5 === 0 && number % 7 === 0) {
  number = "PowerCoders"
  console.log(number)
}
else if (number % 5 === 0) {
  number = "Power"
  console.log(number)
}
else if (number % 3 === 0) {
  number = "Coders"
  console.log(number)
}
else {
  console.log(number)
}

document.write(`<p>${number}</p>`);*/

/*let number_loop = 1

while(number_loop <= 100) {
  if (number_loop % 5 === 0 && number_loop % 7 === 0) {
    number_loop = "PowerCoders";
    console.log(number_loop);
  }
  else if (number_loop % 5 === 0) {
    number_loop = "Power";
    console.log(number_loop);
  }
  else if (number_loop % 3 === 0) {
    number_loop = "Coders";
    console.log(number_loop);
  }
  else {
    console.log(number_loop);
  }
  number_loop++;
}

document.write(`<p>${number_loop}</p>`);*/

/*let number_loop = 1

do {
  if (number_loop % 5 === 0 && number_loop % 3 === 0) {
    console.log("PowerCoders");
    document.write(`<p>${"PowerCoders"}</p>`);
  }
  else if (number_loop % 5 === 0) {
    console.log("Power");
    document.write(`<p>${"Power"}</p>`);
  }
  else if (number_loop % 3 === 0) {
    console.log("Coders");
    document.write(`<p>${"Coders"}</p>`);
  }
  else {
    console.log(number_loop);
    document.write(`<p>${number_loop}</p>`);
  }
  number_loop++;
} while(number_loop <= 20)*/