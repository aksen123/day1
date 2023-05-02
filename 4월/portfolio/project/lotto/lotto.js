const originBtn = document.querySelector("#originBtn");
const selecBtn = document.querySelector("#selecBtn");
const result = document.querySelector("#result");

let numbers = document.querySelectorAll("input");
let luckNum = [...Array(45).keys()].map(el => el +1); //1 ~ 45 담은곳  



originBtn.addEventListener("click", () =>{
  result.innerHTML = "";
  let remove = document.querySelectorAll(":checked");
  remove = [...remove].map(el => Number(el.value));
  console.log(remove)

  luckNum = luckNum.filter(el => {
    if(!remove.includes(el)) return el
  })
  // console.log(luckNum);

  let count = 0;

  const pickNum = setInterval(() => {
    let index = Math.floor(Math.random() * luckNum.length);
    const num = luckNum[index];
    luckNum[index] = undefined;
    luckNum = luckNum.filter((value) => value !== undefined);
    count += 1;

    let ball = document.createElement("span");
    ball.className = "ball";
    ball.innerHTML = num;
    ball.classList.toggle(
      num <= 10  ? "color1"
      : num <= 20 ? "color2"
      : num <= 30 ? "color3"
      : num <= 40 ? "color4" : "color5"
    );

    result.appendChild(ball);
    [...document.querySelectorAll(".ball")]
    .sort((a, b) => 
      Number(a.innerHTML) - Number(b.innerHTML)
    )
    .forEach(el => result.appendChild(el))

    if(count === 6) clearInterval(pickNum);
  },500)
})




// originBtn.addEventListener("click", ()=> {
//   const removeNum = document.querySelectorAll(":checked");
//   let removeNum = []; //체크된 input value 담은곳
//   remove.forEach(number => removeNum.push(number.value));

//   let pickNum = []; //전체 숫자에서 체크된 숫자 제외 해서 담은곳
//   luckNum.filter(x =>{if(!removeNum.includes(x)) {pickNum.push(x);}})
  
//   document.querySelector("form").style.display = "none"
//   //pickNum 중에서 6개 뽑기
//   let count = 1;
//   let resultNum = []; //최종숫자들
//   const lotto = setInterval(() => {
//     let num = Math.floor(Math.random() * pickNum.length);
//     let i = pickNum[num]
//     resultNum.includes(i) ? count-- : resultNum.push(i);
//     count++;
//         //     let ball = document.createElement("span");
//         //     ball.innerHTML = i;
//         //   if(i < 11) {ball.classList.toggle("color1");}
//         //   if(i > 10 && i < 21) {ball.classList.toggle("color2");}
//         //   if(i > 20 && i < 31) {ball.classList.toggle("color3");}
//         //   if(i > 30 && i < 41) {ball.classList.toggle("color4");}
//         //   if(i > 40 && i < 46) {ball.classList.toggle("color5");}
//         // result.appendChild(ball);
//         result.innerHTML = resultNum;

//     if(count > 6) {
//       clearInterval(lotto);
//       // result.innerHTML = ''
//       // //추첨번호 오름차순 정렬
//       // resultNum.sort((a, b) => a - b).forEach(num => {
//       //   let ball = document.createElement("span");
//       //   ball.innerHTML = num;
//       //   //번호별 색깔 주기
//       //     if(num < 11) {ball.classList.toggle("color1");}
//       //     if(num > 10 && num < 21) {ball.classList.toggle("color2");}
//       //     if(num > 20 && num < 31) {ball.classList.toggle("color3");}
//       //     if(num > 30 && num < 41) {ball.classList.toggle("color4");}
//       //     if(num > 40 && num < 46) {ball.classList.toggle("color5");}
//       //   result.appendChild(ball);
//       // })
//     }
//   },700)
// })