const btn_1 = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");
// const btn_3 = document.querySelector(".btn_3");
const inner_container = document.querySelector(".inner-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const handlenextBtn = () => {
  inner_container.style.transform = "translate(-100vw)";
  nextBtn.classList.add("hidden");
  prevBtn.classList.remove("hidden");
  console.log(inner_container.style.transform);
};

const handleprevBtn = () => {
  inner_container.style.transform = "translate(0vw)";
  nextBtn.classList.remove("hidden");
  prevBtn.classList.add("hidden");
};

function button1() {
  inner_container.style.transform = "translate(0vw)";
  nextBtn.classList.remove("hidden");
  prevBtn.classList.add("hidden");
}

function button2() {
  inner_container.style.transform = "translate(-100vw)";
  nextBtn.classList.add("hidden");
  prevBtn.classList.remove("hidden");
}

btn_1.addEventListener("click", button1);
btn_2.addEventListener("click", button2);
nextBtn.addEventListener("click", handlenextBtn);
prevBtn.addEventListener("click", handleprevBtn);
