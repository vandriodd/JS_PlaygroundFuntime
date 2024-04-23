const navToggle = document.querySelector(".nav-toggle")
const linksList = document.querySelector(".links")

const className = "show-links"
const linksClassList = linksList.classList

navToggle.addEventListener("click", () => {
  if (linksClassList.contains(className)) {
    linksClassList.remove(className)
  } else {
    linksClassList.add(className)
  }
})
