const stage = document.querySelector('.stage');
function clickHandler(e) {
  if (e.target.classList.contains('ilbuni')) {
    stage.removeChild(e.target);
  } else {
    console.log('clicked stage');
  }
}
stage.addEventListener('click', clickHandler);
