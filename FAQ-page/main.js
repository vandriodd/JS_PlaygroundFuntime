// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

const container = document.querySelector(".section-center");

container.addEventListener("click", (e) => {
  const btn = e.target.closest(".question-btn");
  if (btn) {
    const question = btn.closest(".question");
    question.classList.toggle("show-text");
  }
})
