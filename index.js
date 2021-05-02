'use strict';

const timeId = setTimeout(() => {
  console.log('setTimeout!');
}, 1000);

console.log(timeId);
clearTimeout(timeId);
