const stageElem = document.querySelector('.stage');
let currentElem;
function closeTheDoor(elem) {
  elem.classList.remove('door-opened');
}
function openTheDoor(elem) {
  elem.classList.toggle('door-opened');
  currentElem = elem;
}
function doorHandler(e) {
  if (currentElem) {
    closeTheDoor(currentElem);
  }
  if (e.target.classList.contains('door-body')) {
    openTheDoor(e.target.parentNode);
  }
}
stageElem.addEventListener('click', doorHandler);
