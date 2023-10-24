let evalList = [{
  "a": true,
  "b": false,
  "c": false,
 },
 {
  "a": false,
  "b": true,
  "c": false,
 },
 {
  "a": true,
  "b": false,
  "c": false,
 }]


let score = 0;
evalList.forEach(item => {
  let userInp = prompt("answer?");
  console.log(userInp);
  let iterate = item[userInp];
  console.log(iterate);
  if (iterate === true) {
    score += 100;
  } else {
    score -= 100;
  }
  console.log(score);
});
  