function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const dataCreateRef = document.querySelector('[data-create]')
console.log(dataCreateRef)

const dataDestroyRef = document.querySelector('[data-destroy]')
console.log(dataDestroyRef)

const inputRef = document.querySelector('input')
console.log(inputRef)


dataCreateRef.addEventListener('click', () => {
  colorRef.textContent = getRandomHexColor()

  const body = document.querySelector('body')

  return body.style.backgroundColor = getRandomHexColor()
})