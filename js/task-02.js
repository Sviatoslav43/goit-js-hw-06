// Task2

// 1. Створить окремий елемент <li>. Обов'язково 
//    використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію
//    у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientRef = document.querySelector('#ingredients')

const doneIngridients = ingredients => {
  return ingredients.map(ingredient => {
    const ingrRef = document.createElement('li')
    ingrRef.textContent = ingredient;
    ingrRef.classList.add('item')

    return ingrRef
  })
} 


const items = doneIngridients(ingredients)
console.log(items)

ingredientRef.append(...items)

console.log(ingredientRef)

// const ulRef = document.querySelector('ul')

// const markup = ingredients
// .map((ingredient) => `<li class="item">${ingredient}</li>`)
// .join("");

// console.log(markup);

// ulRef.innerHTML = markup;


