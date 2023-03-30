document.write("<h1>컴퓨터 가위,바위,보 맞추기 게임</h1>");

let game = prompt("가위, 바위, 보 중 선택하세요", "예시) 가위");
let gameNum;


switch(game) {
  case "가위" : gameNum = 1; 
  break;
  case "바위" : gameNum = 2; 
  break;
  case "보" : gameNum = 3; 
  break;
  default: alert("잘못 입력 하셨습니다!");
  location.reload(); //default 값 나왔을때 prompt가 다시 뜨게 해주는것
} 

let com = Math.ceil(Math.random()*3);

document.write("<img src=\"/math/img/math_img_"+ com +".jpg\">")
console.log(com);

if(gameNum === com) {
  document.write("<img src=\"/math/img/game_1.jpg\">");
} else {
  document.write("<img src=\"/math/img/game_2.jpg\">");
}
// 이미지 넣을때는 경로 앞뒤에 백슬러쉬( \ )를 넣어줌
// ex)  document.write("<img src=\"/math/img/game_2.jpg\">");
