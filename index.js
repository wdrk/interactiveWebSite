const ballElem = document.querySelector('.ball');

function clickHandler(event) {
  ballElem.style.transform = `translate(${event.clientX - 15}px, ${
    event.clientY - 15
  }px)`;
}
window.addEventListener('click', clickHandler);
