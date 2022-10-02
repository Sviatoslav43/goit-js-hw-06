function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorRef = document.querySelector('.color')
console.log(colorRef)

const btnRef = document.querySelector('button')
console.log(btnRef)


btnRef.addEventListener('click', () => {
  colorRef.textContent = getRandomHexColor()

  const body = document.querySelector('body')

  return body.style.backgroundColor = getRandomHexColor()
})

