const billAmount = parseFloat(prompt("Enter the bill amount (CHF):"));
if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid and positive bill amount.");
} else {
    const tipRate = parseFloat(prompt("Enter the tip rate (%):"));
    if (isNaN(tipRate) || tipRate <= 0) {
        alert("Please enter a valid and positive tip rate.");
    } else {
        const tipAmount = (billAmount * tipRate) / 100;
        const roundedTipAmount = Math.ceil(tipAmount * 20) / 20;
        const totalAmount = billAmount + roundedTipAmount;

        alert(`Tip Amount: CHF ${roundedTipAmount.toFixed(2)}`);
        alert(`Total Amount: CHF ${totalAmount.toFixed(2)}`);
    }
}