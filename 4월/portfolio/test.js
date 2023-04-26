const originBtn = document.querySelector("#originBtn");
const selecBtn = document.querySelector("#selecBtn");
const result = document.querySelector("#result");

let numbers = document.querySelectorAll("input");
let luckNum = [];
numbers.forEach(number => luckNum.push(number.value))



originBtn.addEventListener("click", ()=> {
  const remove = document.querySelectorAll(":checked");
  let removeNum = []; //체크된 input value 담는곳
  remove.forEach(number => removeNum.push(number.value));

  let pickNum = []; //전체 숫자에서 체크된 숫자 제외 해서 담은곳
  luckNum.filter(x =>{if(!removeNum.includes(x)) {pickNum.push(x);}})
  //pickNum 중에서 6개 뽑기

  let count = 1;
  let resultNum = []; //최종숫자들
  const lotto = setInterval(() => {
    let num = Math.floor(Math.random() * pickNum.length);
    let i = pickNum[num]
    resultNum.includes(i) ? count-- : resultNum.push(i);
    count++;
    result.innerHTML = resultNum;
    if(count > 6) {
      clearInterval(lotto);

      result.innerHTML = resultNum.sort((a, b) => a - b);
    }
  },700)
})