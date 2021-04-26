const items = document.querySelector('.characters');
items.setAttribute('data-id', 123);
const attr = items.getAttribute('data-id');
console.log(`getAttribute : ${attr}`);
