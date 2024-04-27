const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector(".modal-overlay")

openBtn.addEventListener("click", () => {
  modal.setAttribute("open", "")
})

closeBtn.addEventListener("click", () => {
  modal.removeAttribute("open")
})
