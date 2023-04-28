const originBtn = document.querySelector("#originBtn");
const selecBtn = document.querySelector("#selecBtn");
const result = document.querySelector("#result");

let numbers = document.querySelectorAll("input");
let luckNum = []; //1 ~ 45 담은곳  
numbers.forEach(number => luckNum.push(number.value))



originBtn.addEventListener("click", ()=> {
  const remove = document.querySelectorAll(":checked");
  let removeNum = []; //체크된 input value 담은곳
  remove.forEach(number => removeNum.push(number.value));

  let pickNum = []; //전체 숫자에서 체크된 숫자 제외 해서 담은곳
  luckNum.filter(x =>{if(!removeNum.includes(x)) {pickNum.push(x);}})
  
  document.querySelector("form").style.display = "none"
  //pickNum 중에서 6개 뽑기
  let count = 1;
  let resultNum = []; //최종숫자들
  const lotto = setInterval(() => {
    let num = Math.floor(Math.random() * pickNum.length);
    let i = pickNum[num]
    resultNum.includes(i) ? count-- : resultNum.push(i);
    count++;
        //     let ball = document.createElement("span");
        //     ball.innerHTML = i;
        //   if(i < 11) {ball.classList.toggle("color1");}
        //   if(i > 10 && i < 21) {ball.classList.toggle("color2");}
        //   if(i > 20 && i < 31) {ball.classList.toggle("color3");}
        //   if(i > 30 && i < 41) {ball.classList.toggle("color4");}
        //   if(i > 40 && i < 46) {ball.classList.toggle("color5");}
        // result.appendChild(ball);
        result.innerHTML = resultNum;

    if(count > 6) {
      clearInterval(lotto);
      // result.innerHTML = ''
      // //추첨번호 오름차순 정렬
      // resultNum.sort((a, b) => a - b).forEach(num => {
      //   let ball = document.createElement("span");
      //   ball.innerHTML = num;
      //   //번호별 색깔 주기
      //     if(num < 11) {ball.classList.toggle("color1");}
      //     if(num > 10 && num < 21) {ball.classList.toggle("color2");}
      //     if(num > 20 && num < 31) {ball.classList.toggle("color3");}
      //     if(num > 30 && num < 41) {ball.classList.toggle("color4");}
      //     if(num > 40 && num < 46) {ball.classList.toggle("color5");}
      //   result.appendChild(ball);
      // })
    }
  },700)
})