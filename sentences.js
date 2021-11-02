var userName = document.getElementById("user-name"),
makeButton = document.getElementById("make-sentence"),
clearButton = document.getElementById("clear-button"),
resultsArea = document.getElementById("sentences"),
phrases1 = ["Once upon a time",
"In a small village by the sea",
"Long ago and far away",
"In a world"],
phrases2 = ["lived someone named",
"there lived a person called",
"a mad scientist created a evil monster called",
"lived a beautiful elf named"],
phrases3 = [
    "who ate",
    "who was eaten by",
    "who fell in love with",
    "who loved to play quietly with",
],
phrases4 = [
    "an apple",
    "a fiersome dragon",
"a scary ghost",
"a beautiful young woman",
];

var getPhrase = function getPhrase(wordList){
    var randy = getRandomNumber(0,wordList.length - 1);
    return wordList[randy];
}

makeButton.addEventListener("click", function(){
        var results = getPhrase(phrases1);
results += " " + getPhrase(phrases2);
results += " " + userName.value;
results += " " + getPhrase(phrases3);
results += " " + getPhrase(phrases4);
results += ".";

resultsArea.innerHTML += '<p class="random-sentence">' + results + "</p>";
});

clearButton.addEventListener("click", function(){
    resultsArea.innerHTML = "";
    userName.value = "";
});

var getRandomNumber = function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var randy = Math.random();

    return Math.floor(randy * (max - min + 1) + min);
}