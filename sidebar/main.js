const toggle = document.querySelector(".sidebar-toggle")
const sidebar = document.querySelector(".sidebar")


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar")
})
