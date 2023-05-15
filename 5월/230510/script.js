// const check = function() {
//   let email = document.querySelector("#email").value;
//   let pw1 = document.querySelector("#pw1").value;
//   let pw2 = document.querySelector("#pw2").value;
//   console.log(email)

//   if(email !== "" && pw1 !== "" && pw2 !== "") {
//     document.querySelector("#submit").disabled = false;
//   } else {
//     document.querySelector("#submit").disabled = true;
//   }
// }


const btn = document.querySelector("#btn");
const result = document.querySelector("#num");
const timebox = document.querySelector(".time");



const check1 = function() {
  let num1 = document.querySelector(".num1").value;
  num1.length === 3 ? document.querySelector(".num2").focus() : false
  console.log(num1)
}
const check2 = function() {
  let num2 = document.querySelector(".num2").value;
  num2.length === 4 ? document.querySelector(".num3").focus() : false
}
const check3 = function() {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let num3 = document.querySelector(".num3").value;

  if(num1  &&  num2  && num3 ) {
    if(num3.length === 4) btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}



let isStarted = false;
let timer;


// 버튼 이벤트

btn.addEventListener("click", () => {

  if(isStarted === false){
    isStarted = true;
    let num = Math.floor(Math.random() * 1000000);
    let num2 = String(num).padStart(6, 0);
    result.innerText = num2
    result.style.color = `#${num2}`
    let time = 180;

    timer = setInterval(() => {
      if(time >= 0){
        let min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2, "0");
        timebox.innerHTML = (min +':'+ sec)
        time = time - 1;
      } else {
        btn2.disabled = true
      }
    },1000)
    
  } else {
    isStarted = false;
    btn2.disabled = false;
    clearInterval(timer);

    isStarted = true;
    let num = Math.floor(Math.random() * 1000000);
    let num2 = String(num).padStart(6, 0);
    result.innerText = num2
    result.style.color = `#${num2}`
    let time = 180;

    timer = setInterval(() => {
      if(time >= 0){
        let min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2, "0");
        timebox.innerHTML = (min +':'+ sec)
        time = time - 1;
      } else {
        btn2.disabled = true
      }
    },1000)
  }

});