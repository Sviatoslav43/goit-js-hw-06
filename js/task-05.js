// Task5

// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його
// поточне значення в span#name - output.Якщо інпут
// порожній, у спані повинен відображатися рядок
// "Anonymous".

const inputRef = document.querySelector('input')
console.log(inputRef)

const yourName = document.querySelector('#name-output')
console.log(yourName)

inputRef.addEventListener('input', textForInput)

function textForInput(e) {
    if (e.target.value === '') {
        return yourName.textContent = "Anonymous"
    }
   return yourName.textContent = inputRef.value 
}

// function textForInput(event) {
//     if (event.currentTarget.value === '') {
//         return yourName.textContent = "Anonymous"
//     }

//     return yourName.textContent = event.target.value
// }

// inputRef.addEventListener("input", (event) => {
//     if (event.currentTarget.value === '') {
//         return yourName.textContent = "Anonymous"
//     }
//     return yourName.textContent = event.currentTarget.value;
//  });

