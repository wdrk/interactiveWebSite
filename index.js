// 최초로 선언한 클래스만 선택하는 방법
console.log(document.querySelector('.ilbuni'));

// 특정 클래스를 가진 전부를 선택하는 방법
console.log(document.querySelectorAll('.ilbuni'));

// 유사배열로 가져와서 일부를 선택하는 방법
const ilbuniGroup = document.querySelectorAll('.ilbuni');
console.log(ilbuniGroup[2]);
