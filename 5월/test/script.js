// 오늘 날짜 / 차번호를 받아서 차번호가 10부제에 걸리면 운행불가 출력

let date = prompt("오늘 날짜를 입력해주세요","숫자만입력");
let car = prompt("자동차 번호를 입력해주세요", "숫자만입력");

// function solution(a, b) {
//   let result ="";
//   let date = a[a.length -1];
//   let car = b[b.length -1];
//   date === car ? result = "오늘은 차량운행 불가입니다" : result = "안전운전 하세요"
//   return result
// }

// console.log(solution(date, car));


function solution2(a, b) {
  let result ="";
  let date = a % 10;
  let car = b % 10;

    date === car ? result = "오늘은 차량운행 불가입니다" : result = "안전운전 하세요"

  return result
}

console.log(solution2(date, car));