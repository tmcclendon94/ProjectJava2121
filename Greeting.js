var whoToGreet = document.getElementById("who-to-greet"),
greetingArea = document.getElementById("greeting-area"),
greetingButton = document.getElementById("greetings-button"),
helloButton = document.getElementById("hello-button"),
howdyButton = document.getElementById("howdy-button");

var greet = function greet(button){
  var text = whoToGreet.value;

greetingArea.innerHTML = button.value + " " + text;
};

  greetingButton.addEventListener("click", function(){
  greet(greetingButton);
  });

helloButton.addEventListener("click", function(){
greet(helloButton);
});

howdyButton.addEventListener("click", function(){
greet(howdyButton);
});
