const stage = document.querySelector('.stage');
stage.addEventListener('click', function (e) {
  if (e.target !== stage) {
    console.log(e.target);
    // this.removeChild(e.target);
    e.target.parentNode.removeChild(e.target);
  } else {
    console.log('clicked stage');
  }
});
