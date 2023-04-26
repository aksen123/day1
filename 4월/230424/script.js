const content ="가을에 피크닉 가는게 너무 좋아요"
// content 변수에 나타낼 텍스트 대입
const text = document.querySelector('#result')
// 태그를 지정해둔 클래스 이름으로 가져와서 text변수로 지정
var index=0 

function typing() {
//typing 이라는 임의의 함수를 선언
  text.textContent += content[index++] 
  // content의 텍스트를 index0을 시작으로 1씩 더해지며 text	변수에 지정되어있는 h1태그 (#typingAni) 에 표시됨.
  if(index>content.length){
  // index의 값이 content변수의 텍스트 길이보다 커지면
    text.textContent=""
    //텍스트변수의 문자열이 없어지고
    index=0;
    //인덱스값이 0으로 리셋
  }
}

setInterval(typing,100)
//typing함수를 0.2초마다 실행시킨다.