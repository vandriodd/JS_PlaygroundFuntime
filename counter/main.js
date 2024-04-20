const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const value = document.querySelector('.count')

let count = 0

decrease.addEventListener("click", () => {
  count--
  value.textContent = count
})

reset.addEventListener("click", () => {
  count = 0
  value.textContent = count
})

increase.addEventListener("click", () => {
  count++
  value.textContent = count
})
