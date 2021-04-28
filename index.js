const stageElem = document.querySelector('.stage');
let currentElem;
function doorHandler(e) {
  if (currentElem) {
    currentElem.classList.remove('door-opened');
  }
  if (e.target.classList.contains('door-body')) {
    e.target.parentNode.classList.toggle('door-opened');
    currentElem = e.target.parentNode;
  }
}
stageElem.addEventListener('click', doorHandler);
