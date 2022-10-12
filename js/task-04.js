// Task4

// 1.  Створи змінну counterValue, в якій буде зберігатися
//     поточне значення лічильника та ініціалізуй її значенням 0.
// 2.  Додай слухачів кліків до кнопок, всередині яких збільшуй
//     або зменшуй значення лічильника.
// 3.  Оновлюй інтерфейс новим значенням змінної counterValue.


const decrementBtnRef = document.querySelector('[data-action="decrement"]')
const incrementBtnRef = document.querySelector('[data-action="increment"]')
// console.log(decrementBtnRef)
const valueRef = document.querySelector('#value')
const valueItem = document.querySelector('span') 

// console.log(incrementBtnRe
// console.log(valueRef)

let counterValue = 0
decrementBtnRef.addEventListener('click', minusNumber)

incrementBtnRef.addEventListener('click', addNumber)

function minusNumber() {
    counterValue -= 1;
    return valueRef.textContent = counterValue;
}

function addNumber() {
    counterValue += 1
    return valueRef.textContent = counterValue
}

// decrementBtnRef.addEventListener('click', () => {
//     counterValue -= 1; 
//     return valueItem.textContent = counterValue;
// })

// incrementBtnRef.addEventListener('click', () => {
//     counterValue += 1;
//     return valueItem.textContent = counterValue;
// })
