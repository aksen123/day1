let com = Math.ceil(Math.random()*3);
let comNum;

switch(com) {
  case 1 : comNum = "가위" ;
  break;
  case 2 : comNum = "바위" ;
  break;
  case 3 : comNum = "보" ;
  break;
}
document.querySelector('#com_text').innerText = comNum;

console.log(comNum);

let userNum 

function text() {
  document.querySelector('#me').innerText =  ;
}