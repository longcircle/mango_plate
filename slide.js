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

// const onclick = () => {
//   current + 1;
// };
function moveSlide(num) {
  slide.style.left = -num * 990 + "px";
  currentIdx = num;
}

// function moveSlide(num) {
//   const iii = (slide.style.transform = `translaste(${-num * 990}px)`);
//   currentIdx = num;
//   console.log(iii);
// }

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

// slide_1.addEventListener("click", function () {
//   moveSlide(currentIdx + 1);
//   nextBtn.classList.add("hidden");
//   prevBtn.classList.remove("hidden");
// });

// slide_2.addEventListener("click", function () {
//   moveSlide(currentIdx - 1);
//   nextBtn.classList.remove("hidden");
//   prevBtn.classList.add("hidden");
// });
