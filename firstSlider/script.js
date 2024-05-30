const leftArrow = document.getElementsByClassName("left");
const rightArrow = document.getElementsByClassName("right");
const sliders = document.querySelectorAll("slider-images");
const bottom = document.getElementsByClassName("bottom");

let currentSliderIndex = 0;
function showSlide() {
  sliders[currentSliderIndex].classList.add("block");
}

function hideSlide() {
  sliders[currentSliderIndex].classList.remove(".block");
}

function nextSlide() {
  currentSliderIndex++;
  if (currentSliderIndex > sliders.length - 1) {
    currentSliderIndex = 0;
  }
  showSlide();
}
