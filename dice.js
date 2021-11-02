var rollButton = document.getElementById("roll-dice-button"),
displayArea = document.getElementById("display-area");
startOverButton = document.getElementById("start-over-button"),
totalArea = document.getElementById("total"),
totalRolled = 0;

rollButton.addEventListener("click", function(){
    var currentRoll = getRandomNumber(1,6);
    totalRolled += currentRoll;
    displayArea.innerHTML += '<img src="images/dice' + currentRoll + '.jpg"><br>';
    totalArea.innerHTML = "<h2>Total Rolled So Far: " + totalRolled + "</h2>";
});
startOverButton.addEventListener("click", function(){
displayArea.innerHTML = "";
totalArea.innerHTML = "<h2>Total Rolled So Far: 0</h2>";
totalRolled = 0;
});
var getRandomNumber = function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var randy = Math.random();

    console.log(min);
    console.log(max);
    console.log(randy);
    console.log(max - min);
    console.log(max - min + 1);
    console.log(randy * (max - min + 1));
    console.log(randy * (max - min + 1) + min);
    console.log(Math.floor(randy * (max - min + 1) + min));

    return Math.floor(randy * (max - min + 1) + min);
}