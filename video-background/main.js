const loader = document.querySelector(".preloader");
// const btn = document.querySelector(".switch-btn")
const btn = document.querySelector(".btn")
const icon = document.querySelector(".fa-icon")
const video = document.querySelector(".video-container")

//* 1. With button slide
// btn.addEventListener("click", () => {
//   if (!btn.classList.contains("slide")) {
//     btn.classList.add("slide")
//     video.pause()
//   } else {
//     btn.classList.remove("slide")
//     video.play()
//   }
// })


//* 2. Other type of button
icon.classList.add("fa-play")

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play()
    icon.classList.remove("fa-play")
    icon.classList.add("fa-pause")
  } else {
    video.pause()
    icon.classList.remove("fa-pause")
    icon.classList.add("fa-play")
  }
})

window.addEventListener("load", () => {
  loader.classList.add("hide-preloader");
});
