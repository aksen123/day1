//##### D-day 계산기 #####
let now = new Date();
let fristDay = new Date("2023/02/28");

let toNow = now.getTime();
let toFrist = fristDay.getTime();

let passedTime = toNow - toFrist;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

document.querySelector('#accent').innerText = passedDay + "일";

calcDate(100); //함수 호출문
calcDate(200);
calcDate(365);
calcDate(500);
//##### D-day Function #####
function calcDate(days) {
  let futrue = toFrist + days * (24 * 60 * 60 * 1000);
  let someDay = new Date(futrue);
  let year = someDay.getFullYear();
  let month = someDay.getMonth() + 1;
  let date = someDay.getDate();
  document.querySelector("#date"+days).innerText = year + "년" + month + "월" + date + "일"
}
//위 처럼 함수는 호출문이 먼저 나와도 상관없음 (*호이스팅) 단, 기본적인 요소들(지정한 변수들) 보단 아래에 있어야함 