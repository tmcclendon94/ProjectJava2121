var checkAmountText = document.getElementById("check-amount"),
tipPercentageText = document.getElementById("tip-percentage"),
calculateTipButton = document.getElementById("calculate-tip"),
totalToPayDiv = document.getElementById("total-to-pay");

calculateTipButton.addEventListener("click", function(){
var checkAmount = parseFloat(checkAmountText.value),
tipPercentage = parseFloat(tipPercentageText.value)/100,
tipAmount = checkAmount * tipPercentage,
totalAmount = checkAmount + tipAmount;

totalToPayDiv.innerHTML = "<strong>Check Amount:</strong> $" +
checkAmount + "<br>" +
 "<strong>Tip Amount:</strong> $" + tipAmount + "<br>" +
 "<strong>Total to Pay:</strong> $" + totalAmount;
});