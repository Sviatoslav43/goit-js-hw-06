// Task3

// Використовуй масив об'єктів images для створення 
// елементів < img >, вкладених в < li >.
// Для створення розмітки використовуй шаблонні
//  рядки і метод insertAdjacentHTML().

// 1.  Усі елементи галереї повинні додаватися
//     в DOM за одну операцію додавання.
// 2.  Додай мінімальне оформлення галереї 
//     флексбоксами або грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.querySelector('.gallery')

console.log(galleryRef)

const markup = images.map(image => {
  return `<li class = list><img src=${image.url} alt=${image.alt}/> </li>`
}).join('')

console.log(markup)

galleryRef.insertAdjacentHTML('beforeend', markup)

const imgRef = document.querySelectorAll('img')

galleryRef.style.display = "flex";
galleryRef.style.flexDirection = "column";
galleryRef.style.listStyleType = "none";
galleryRef.style.paddingLeft = "0px";



imgRef.forEach((img) => {
  img.setAttribute("width", 250)
})


