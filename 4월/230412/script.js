let userNum = parseInt(prompt("숫자를 입력 해주세요"));

if(!isNaN(userNum)) {
  isPositive(userNum);
}

function isPositive(number) {
  if(number > 0) {
    alert(`${number} : 양수 입니다`)
  } else if(number < 0){
    alert(`${number} : 음수 입니다`)
  } else {
    alert(`${number} : 0 입니다`)
  }
} 