// Task1

// 1.  Порахує і виведе в консоль кількість категорій
//     в ul#categories, тобто елементів li.item.
// 2.  Для кожного элемента li.item у спику ul#categories,
//     знайде і виведе в консоль текст заголовку
//     елемента(тегу < h2 >) і кількість елементів в
//     категорії(усіх < li >, вкладених в нього).


const allItemsNameRef = document.querySelectorAll('.item');
console.log("Number of categories: ", allItemsNameRef.length);


const subCategories = document.querySelectorAll('.item');
// console.log(subCategories)

const h2Ref =(element) => {
    element.forEach(element => {
        const firstElem = element.firstElementChild
        console.log('Category: ', firstElem.textContent)
        const siblingFirstEl = firstElem.nextElementSibling
        const sibCildren = siblingFirstEl.children
        console.log('Elements: ', sibCildren.length)
    });
}

h2Ref(subCategories)

