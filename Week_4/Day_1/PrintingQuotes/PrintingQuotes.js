let InputAuthor
let LowerAuthor
let InputQuote

InputAuthor = prompt("Please enter the Author: ");
InputQuote = prompt("Please enter the Quote: ");

LowerAuthor = InputAuthor.toLowerCase();



if (LowerAuthor === "anonymous" || LowerAuthor === "unknown" || LowerAuthor === "") {
  Message = "No one knows who said " + InputQuote;
} else {
  Message = InputAuthor + " says " + InputQuote;
}

console.log(Message);