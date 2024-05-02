//* 1. Adding individual event listeners to each button
// const btns = document.querySelectorAll(".question-btn")

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement

//     question.classList.toggle("show-text")
//   })
// })

//* 2. Toggle each question individually
// const questions = document.querySelectorAll(".question")

// questions.forEach((question) => {
//   const btn = question.querySelector(".question-btn")

//   btn.addEventListener("click", () => {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     })
//     question.classList.toggle("show-text");
//   })
// })

//* 3. Using event delegation on the Container
const container = document.querySelector(".section-center");

container.addEventListener("click", (e) => {
  const btn = e.target.closest(".question-btn");
  if (btn) {
    const question = btn.closest(".question");
    question.classList.toggle("show-text");
  }
})
