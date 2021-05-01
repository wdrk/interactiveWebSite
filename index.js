const outputElem = document.querySelector('.output');
const ilbuniElem = document.querySelector('.ilbuni');

window.addEventListener('scroll', function () {
  // outputElem.innerHTML = window.pageYOffset; 스크롤을 감지해서 값을 가져오는 방법
  // outputElem.innerHTML = ilbuniElem.offsetTop; 객체의 처음 위치값을 가져오는 방법
  //
  // 각종 위치값을 가져오는 방법
  // outputElem.innerHTML = ilbuniElem.getBoundingClientRect();
  // 브라우저 top을 기준으로 객체의 위치값 가져오기
  outputElem.innerHTML = ilbuniElem.getBoundingClientRect().top;
});
