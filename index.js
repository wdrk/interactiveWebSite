const outputElem = document.querySelector('.output');
window.addEventListener('scroll', function () {
  outputElem.innerHTML = window.pageYOffset;
});
