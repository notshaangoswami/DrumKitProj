var numOfButtons = document.querySelectorAll(".drum").length;
//button press
for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //buttons with class drum ko jab hum"click" krenge then funtion call hoga jo alert pop krega

    var innHtmlButton = this.innerHTML;

    makeSound(innHtmlButton);
    buttonAnimation(innHtmlButton);
  });
}

//key press
document.addEventListener("keypress", function (event) {
  makeSound(event.key); //event.key would hive which key was pressed during the event.
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;
    case "j":
      var crashaud = new Audio("sounds/crash.mp3");
      crashaud.play();

      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;

    default:
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
