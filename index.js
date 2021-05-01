const ballElem = document.querySelector('.ball');

function clickHandler(event) {
  console.log(event.clientX, event.clientY);
}
window.addEventListener('click', clickHandler);
