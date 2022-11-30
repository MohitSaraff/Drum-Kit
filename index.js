const buttons = document.querySelectorAll(".drum");
let audio;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonInnerHTML = button.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

const makeSound = (key) => {
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
};

const buttonAnimation = (key) => {
  const activeButton = document.querySelector("." + key);
  activeButton.classList.toggle("pressed");
  setTimeout(() => activeButton.classList.toggle("pressed"), 100);
};
