function arabicToRoman(arabicNum, romanData) {
  if (arabicNum < 1 || arabicNum > 3000) {
    return "Invalid input";
  }

  let romanNumeral = "";
  const sortedValues = Object.keys(romanData).sort((a, b) => b - a);
  for (const value of sortedValues) {
    while (arabicNum >= parseInt(value)) {
      romanNumeral += romanData[value];
      arabicNum -= parseInt(value);
    }
  }

  return romanNumeral;
}

fetch('roman_numerals.json')
  .then(response => response.json())
  .then(data => {
    const romanNumerals = data;

    const arabicNumber = 6071;
    const romanResult = arabicToRoman(arabicNumber, romanNumerals);
    console.log(`${arabicNumber} in Roman numerals is ${romanResult}`);
  })
  .catch(error => console.error('Error loading JSON data:', error));

/*const fs = require('fs');

function convert(decimalNum, romanData) {
  let numToRoman = '';

  for (let i in romanData) {
    i = parseInt(i);
    numToRoman += romanData[i].repeat(Math.floor(decimalNum / i));
    decimalNum %= i;
  }

  return numToRoman;
}

// Load the Roman numeral data from the JSON file
const romanNumeralsData = JSON.parse(fs.readFileSync('roman_numerals.json', 'utf-8'));

const romanNumeral = convert(123, romanNumeralsData);
console.log(romanNumeral); // Output: "CXXIII"*/