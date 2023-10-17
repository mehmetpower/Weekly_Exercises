//Inputs
let currentYear = new Date().getFullYear();
let currentAge;
let desiredAge;
let message;

// For getting user input, check if it is not blank and convert to NUMBER//
function getcurrentAge(message) {
  currentAge = prompt(`${message}`);
  while (currentAge.length === 0 ) {
    message = `Age can not be left blank.`
    currentAge = prompt(`${message}`);
  }
  currentAge = +currentAge
}
function getDesiredAge(message) {
  desiredAge = prompt(`${message}`);
  while (desiredAge.length === 0 ) {
    message = `Age can not be left blank.`
    desiredAge = prompt(`${message}`);
  }
  desiredAge = +desiredAge
}
// 2 Parts of user input validation:
// Part-1) Current Age
function retirement() {
  message = "How old are you? ";
  getcurrentAge(message);
  while (isNaN(currentAge) || currentAge < 1 || `${currentAge}`.includes(".")) {
    if (`${currentAge}`.includes(".")) {
      message = `Please enter a valid positive, integer value for your age. Not a float value like ${currentAge}: `;
      getcurrentAge(message);
    } else {
      message = `Please enter a valid positive, integer number value for your age: `;
      getcurrentAge(message);
    }
  }
  message = "At which age do you want to retire? ";
// Part-2) Desired Age, 
  getDesiredAge(message);
  while (
    isNaN(desiredAge) ||
    desiredAge < 1 ||
    `${desiredAge}`.includes(".") ||
    desiredAge < currentAge
  ) {
    if (`${desiredAge}`.includes(".")) {
      message = `Please enter a valid positive, integer value for your age. Not a float value like ${desiredAge}: `;
      getDesiredAge(message);
    } else if (desiredAge < currentAge && desiredAge > 0) {
      message = `You entered ${desiredAge}.\nYour age is: ${currentAge}.\n Desired age can not be smaller than ${currentAge}. `;
      getDesiredAge(message);
    } else {
      message = `Please enter a valid positive, integer value for your age: `;
      getDesiredAge(message);
    }
  }
// Finally!! Calculation
  let yearsLeft = desiredAge - currentAge;
  let retirementYear = currentYear + yearsLeft;
  let message2;
  if (yearsLeft === 1) {
    message2 = `You will retire next year at <b>${retirementYear}</b>. You just have <b><u>${yearsLeft}</u></b> year for retirement.`;
  } else if (yearsLeft === 0) {
    message2 = `You are retiring this year.`;
  } else {
    message2 = `You will retire at the year <b>${retirementYear}</b> and you still have  <b><u>${yearsLeft}</u></b> years for retirement.`;
  }
  document.body.innerHTML = message2;
}

// Call the retirement function
retirement();
