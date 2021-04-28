const stageElem = document.querySelector('.stage');
function doorHandler(e) {
  if (e.target.classList.contains('door-body')) {
    e.target.parentNode.classList.toggle('door-opened');
  }
}
stageElem.addEventListener('click', doorHandler);
