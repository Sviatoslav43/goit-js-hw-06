// Task6

// Напиши скрипт, який під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.


{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/> */}


// 1. Яка кількість смиволів повинна бути в інпуті,
//    зазначається в його атрибуті data - length.
// 2. Якщо введена правильна кількість символів, то
//    border інпуту стає зеленим, якщо неправильна
//    кількість - червоним.
// 3. Для додавання стилів використовуй CSS - класи
//    valid і invalid, які ми вже додали у вихідні
//    файли завдання.



const textInputRef = document.querySelector('#validation-input')
const lengthInputRef = document.querySelector('[data-length = "6"]')
const inputRef = document.querySelector('input')


// inputRef.addEventListener('blur', (event) => {
 
//   if (lengthInputRef.dataset.length == event.currentTarget.value.length) {
//     console.log("yeah")
//    return inputRef.style.border = "3px solid green"
//   }
    
//   console.log("noooooo")
//     return inputRef.style.border = "3px solid red"
// })

inputRef.addEventListener('blur', (event)=> {
  if (event.currentTarget.value.length == lengthInputRef.dataset.length) {
    inputRef.classList.remove("invalid")
    inputRef.classList.add("valid")
  } else {
    inputRef.classList.remove("valid")
    inputRef.classList.add("invalid")
  }

  
})

