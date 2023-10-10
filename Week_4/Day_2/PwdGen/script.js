let person = {
  name: "John",
  age: 30,
  greet: function() {
    return  "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
  }
};

let message = person.greet(); // Call the method
document.write(`<p>${person.greet()}</p>`);

//console.log(message)

const pwd = []
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specChar = ["-", "_"]
const minLen = 8

let pwdLen = Math.floor(Math.random() * minLen) + minLen;

//alert(pwdLen)
document.write(`<p>${pwdLen}</p>`);




