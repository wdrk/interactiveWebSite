// 엘리먼트 생성
const elem = document.createElement('p');

// 엘리먼트에 내용을 설정
elem.innerHTML = '<a href="#">Hello</a>???';

// 원하는 엘리먼트를 가져와서 자식 엘리먼트로 등록하기
const charactersElem = document.querySelector('.characters');
charactersElem.appendChild(elem);

// 자식 엘리먼트 삭제
charactersElem.removeChild(document.querySelector('.b'));
