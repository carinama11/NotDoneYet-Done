const imgSlider = document.querySelector(".image-slider");
const SliderLength = document.querySelectorAll(".image-content li");
console.log(imgSlider);
console.log(SliderLength);

// Button
const NextBtn = document.querySelector("#Next-btn");
const PrevBtn = document.querySelector("#Prev-btn");
//EndButton

// base counter = 2;
// Functions
let counter = 99;
var FirstClone = true;
var LastClone = true;
var width = SliderLength[0].offsetWidth;

//#region #Function
function animateimage() {
  imgSlider.style.animation = "image-first-animation 2s";
}

function imageslider() {
  if (counter == 99) {
    counter = 2;
    imgSlider.style.transition = "none";
    imgSlider.style.transform = "translateX(" + -width * counter + "px" + ")";
  } else {
    imgSlider.style.transition = "transform .8s ease-in-out";
    imgSlider.style.transform = "translateX(" + -width * counter + "px" + ")";
  }
  console.log(counter);
}

//#endregion

//#region #Button

imgSlider.addEventListener("transitionend", () => {
  if (SliderLength[counter + 1].id === "last-clone") {
    LastClone = false;
    counter = 7;
    imgSlider.style.transition = "none";
    imgSlider.style.transform = "translateX(" + -width * counter + "px" + ")";
  } else if (SliderLength[counter + 2].id === "first-clone") {
    FirstClone = false;
    counter = 0;
    imgSlider.style.transition = "none";
    imgSlider.style.transform = "translateX(" + -width * counter + "px" + ")";
  } else if (counter == -1) {
    counter = 6;
    imgSlider.style.transition = "none";
    imgSlider.style.transform = "translateX(" + -width * counter + "px" + ")";
  } else if (counter == 8) {
    counter = 1;
    imgSlider.style.transition = "none";
    imgSlider.style.transform = "translateX(" + -width * counter + "px" + ")";
  }
  console.log(counter);
  console.log(FirstClone);
  console.log(LastClone);
});

NextBtn.addEventListener("click", () => {
  if (counter == 7 && LastClone == true) return;
  counter++;
  LastClone == true;
  imageslider();
});
PrevBtn.addEventListener("click", () => {
  if (counter == 0 && FirstClone == true) return;
  counter--;
  FirstClone == true;
  imageslider();
});

//#endregion #Button

imageslider();
animateimage();
