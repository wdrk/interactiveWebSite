const ballElem = document.querySelector('.ball');

function clickHandler(event) {
  ballElem.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}
window.addEventListener('click', clickHandler);
