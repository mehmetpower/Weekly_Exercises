let inputAuthor
let inputQuote
let lowerAuthor
let author

inputAuthor = prompt("Please enter the Author: ");
inputQuote = prompt("Please enter the Quote: ");

lowerAuthor = inputAuthor.toLowerCase();

if (lowerAuthor === "anonymous" || lowerAuthor === "unknown" || lowerAuthor === "") {
  let message = "No one knows who said " + inputQuote;
} else {
  let author = lowerAuthor.charAt(0).toUpperCase() + lowerAuthor.slice(1);
  let message = author + " says " + "\"" + inputQuote + "\""  + ".";
};

console.log(message);