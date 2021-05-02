const ballElem = document.querySelector('.ball');

ballElem.addEventListener('click', function () {
  ballElem.style.animation = 'ball-ani 1s 3 alternate forwards';
});

ballElem.addEventListener('animationend', function () {
  ballElem.classList.add('end');
});
