const button = document.querySelector('button')
const color = document.querySelector('.color-code')
const simpleMode = document.getElementById('simple')
const hexMode = document.getElementById('hex')

const generateHex = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 256)

  const red = getRandomNumber().toString(16)
  const green = getRandomNumber().toString(16)
  const blue = getRandomNumber().toString(16)

  const hexColor = `#${red}${green}${blue}`

  return hexColor
}

const generateSimple = () => {
  const simpleColors = ['red', 'green', 'blue', 'aliceblue', 'antiquewhite', 'aqua', 'beige', 'cyan', 'cornflowerblue']

  const simpleColor = simpleColors[Math.floor(Math.random() * simpleColors.length)]

  return simpleColor
}

button.addEventListener('click', () => {
  let randomColor = simpleMode.checked ? generateSimple() : generateHex()

  document.body.style.backgroundColor = randomColor
  color.innerHTML = randomColor
})
