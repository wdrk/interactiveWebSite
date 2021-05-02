const ballElem = document.querySelector('.ball');
ballElem.addEventListener('animationend', function () {
  ballElem.classList.add('end');
});
