const email = document.querySelector(".email");
const name = document.querySelector(".name");
let pw1 = document.querySelector(".pw1");
let pw2 = document.querySelector(".pw2");

const send_btn = document.querySelector(".send_btn");
const complete_btn = document.querySelector(".complete_btn");
const join_btn = document.querySelector(".join_btn");

//  핸드폰 번호 
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
    if(num3.length === 4) send_btn.disabled = false;
  } else {
    send_btn.disabled = true;
  }
}

//  인증번호 전송 버튼 
const showTimer = document.querySelector(".timer");
let start = false ; 
let timer;

send_btn.addEventListener('click', ()=> {
  let num = Math.floor(Math.random() * 1000000);
  let num2 = String(num).padStart(6, '0');

  document.querySelector('.number').innerText = num2;
  complete_btn.disabled = false;

  let time = 5;

  timer = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = String(time % 60).padStart(2, "0");

    showTimer.innerText = `${min}:${sec}`
    time -= 1
    if(time < 0) {
      clearInterval(timer);
      complete_btn.disabled = true;
}
  },1000)
})

function complete() {
  alert("인증이 완료되었습니다");
  join_btn.disabled = false;
  clearInterval(timer);
}


const select = document.querySelector("#select")

join_btn.addEventListener('click', ()=> {
  const email = document.querySelector(".email").value;
  const name = document.querySelector(".name").value;
  let pw1 = document.querySelector(".pw1").value;
  let pw2 = document.querySelector(".pw2").value;
  
  if(email && email.includes("@") && name && pw1 === pw2) {
    alert("회원가입이 완료되었습니다");
  }

  if(email === "" || !email.includes("@")) {
    document.querySelector(".erremail").innerText = "이메일 형식이 잘못되었습니다";
  } 
    if(name === "") {
      document.querySelector(".errname").innerText = "이름을 입력해주세요";
    }

    if(pw1 !== pw2) {
      document.querySelector(".errpw1").innerText = "비밀번호가 다릅니다";
      document.querySelector(".errpw2").innerText = "비밀번호가 다릅니다";

    } else if(pw1 === "" || pw2 === ""){
      document.querySelector(".errpw1").innerText = "비밀번호를 입력해주세요";
      document.querySelector(".errpw2").innerText = "비밀번호를 입력해주세요";
    }

    // email.value = "";
    // name.value = "";
    // pw1.value = "";
    // pw2.value = "";
})
