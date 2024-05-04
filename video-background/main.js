const loader = document.querySelector(".preloader");
const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide")
    video.pause()
  } else {
    btn.classList.remove("slide")
    video.play()
  }
})

window.addEventListener("load", () => {
  loader.classList.add("hide-preloader");
});
