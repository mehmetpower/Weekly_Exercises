document.getElementById("calculate").addEventListener("click", function () {
  let billAmount = parseFloat(document.getElementById("billAmount").value);
  let tipRate = parseInt(document.getElementById("tipRate").value);

  if (isNaN(billAmount) || isNaN(tipRate) || billAmount <= 0 || tipRate <= 0) {
      alert("Please enter valid and positive numbers for Bill Amount and Tip Rate.");
      return;
  }

  const tipAmount = (billAmount * tipRate) / 100;

  const roundedTipAmount = Math.ceil(tipAmount * 20) / 20;

  const totalAmount = billAmount + roundedTipAmount;

  document.getElementById("tipAmount").textContent = `Tip Amount: CHF ${roundedTipAmount.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `Total Amount: CHF ${totalAmount.toFixed(2)}`;
});