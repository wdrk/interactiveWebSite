const ballElem = document.querySelector('.ball');

function clickHandler(event) {
  ballElem.style.transform = `translate(${event.clientX - 15}px, ${
    event.clientY - 15
  }px)`;
}

function endHandler(event) {
  ballElem.classList.add('end');
}

window.addEventListener('click', clickHandler);
ballElem.addEventListener('transitionend', endHandler);
