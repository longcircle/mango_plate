let slide = document.querySelector(".slide");
let slides = document.querySelectorAll(".slide ul");
let currentIdx = 0;
let slideCount = slides.length;
const slideWidth = 300;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slide_1 = document.querySelector("slide_1");
const slide_2 = document.querySelector("slide_2");

slide.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px";

// function moveSlide(num) {
//   slide.style.left = -num * 990 + "px";
//   currentIdx = num;
// }

function moveSlide(num) {
  slide.style.transform = `translate(${-num * 990}px)`;
  currentIdx = num;
}

nextBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
  nextBtn.classList.add("hidden");
  prevBtn.classList.remove("hidden");
});

prevBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
  nextBtn.classList.remove("hidden");
  prevBtn.classList.add("hidden");
});
