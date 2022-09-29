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

const ulRef = document.querySelector('ul')

const markup = ingredients
.map((ingredient) => `<li class="item">${ingredient}</li>`)
.join("");

console.log(markup);

ulRef.innerHTML = markup;