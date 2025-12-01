const countElement = document.querySelector('.count')
const clickButton = document.querySelector('.clickButton')

let count = 0

clickButton.addEventListener('click', () => {
  count++
  countElement.textContent = count
})
