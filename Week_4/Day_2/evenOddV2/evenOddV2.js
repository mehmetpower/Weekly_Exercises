let output

for (let i = 0; i <= 20; i++) {
  output = i % 2 == 0 ? `${i} is even.` : `${i} is odd.`;
  document.write(`<p>${output}</p>`);
}
