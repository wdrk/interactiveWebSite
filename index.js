'use strict';

const timeId = setTimeout(() => {
  console.log('setTimeout!');
}, 3000);

console.log(timeId);

const btnElem = document.querySelector('.btn');
btnElem.addEventListener('click', function () {
  clearTimeout(timeId);
});
