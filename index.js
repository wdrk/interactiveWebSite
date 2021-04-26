const item = document.querySelector('.ilbuni');

// 기존의 클래스를 그대로 두고 새로운 클래스를 추가
item.classList.add('special');

// 기존의 클래스를 모두 지우고 새로운 클래스로 설정
item.className = 'special';

// 클래스 삭제
const item2 = document.querySelector('.ilbuni');
item2.classList.remove('ilbuni');

// 클래스 껐다켰다 가능
item2.classList.toggle('special');
