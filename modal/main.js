const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector(".modal-overlay")

// document.querySelector(".open-btn").click = function()

// openBtn.onclick = () => modal.setAttribute("open", "")

openBtn.addEventListener("click", () => {
  modal.setAttribute("open", "")
})

closeBtn.addEventListener("click", () => {
  modal.removeAttribute("open")
})
