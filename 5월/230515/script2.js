const num = document.querySelector(".num1")
function check1() {
  const num1 = document.querySelector(".num1")
  if(num1.value.length === num1.maxLength) {document.querySelector(".num2").focus()
}
}
function check2() {
  const num2 = document.querySelector(".num2").value
  if(num2.length === 4) {document.querySelector(".num3").focus()
}
}
function check3() {
  const num1 = document.querySelector(".num1").value
  const num2 = document.querySelector(".num2").value
  const num3 = document.querySelector(".num3").value

  if(num1.length === 3 && num2.length === 4 && num3.length === 4) {
    document.querySelector(".send_btn").style = "background-color : #fff; color : #0068ff; cursor : pointer"
    document.querySelector(".send_btn").removeAttribute("disabled")
  }
};


function getToken() {
  const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
  document.querySelector(".number").innerText = token;

  document.querySelector(".send_btn").style = "background-color : #fff"
  document.querySelector(".send_btn").setAttribute("disabled", "true")
  document.querySelector(".complete_btn").style = "background-color : #0068ff; color : #fff; cursor : pointer"
  document.querySelector(".complete_btn").removeAttribute("disabled");

  getTokenTimer();
}

let timer = 180;
let interval;
function getTokenTimer() {
  interval = setInterval(()=> {
    if(timer >= 0) {
      const min = Math.floor(timer / 60);
      const sec = String(timer % 60).padStart(2, "0");
      
      document.querySelector(".timer").innerText = `${min}:${sec}`
      timer -= 1
    }else {
      document.querySelector(".number").innerText = '000000'
      document.querySelector(".send_btn").style = '';
      document.querySelector(".send_btn").setAttribute("disabled", "true") ;
      document.querySelector(".timer").innerText = '3:00';
      document.querySelector(".complete_btn").style = '';
      document.querySelector(".complete_btn").setAttribute("disabled", "true") ;
      clearInterval(interval);
      timer = 180
    }
  },1000)
};

function getTokenTimerConfirm() {
  clearInterval(interval);
  timer = 180
  document.querySelector(".complete_btn").style = "background-color : #fff"
  document.querySelector(".complete_btn").setAttribute("disabled", true);
  document.querySelector(".complete_btn").innerText = "인증완료";
  alert("인증이 완료 되었습니다");
  document.querySelector(".join_btn").style = "background-color : #fff; color : #0068ff; border : 1px solid #0068ff; cursor : pointer"
  document.querySelector(".join_btn").removeAttribute("disabled");
};

function signup() {
  const email = document.querySelector(".email").value;
  const name = document.querySelector(".name").value;
  const pw1 = document.querySelector(".pw1").value;
  const pw2 = document.querySelector(".pw2").value;
  const location = document.querySelector("#location").value;
  const female = document.querySelector("#female").checked;
  const male = document.querySelector("#male").checked;
  console.log(location)
  let isValid = true;

  if(email.includes("@") === false || email ==="") {
    document.querySelector(".erremail").innerText = "이메일이 올바르지 않습니다."
    isValid = false;
  }else {
    document.querySelector(".erremail").innerText = "";
  }
  if(name === "") {
    document.querySelector(".errname").innerText = "이름이 올바르지 않습니다."
    isValid = false;
  }else {
    document.querySelector(".errname").innerText = "";
  }
  if(pw1 === "") {
    document.querySelector(".errpw1").innerText = "비밀번호를 입력해주세요."
    document.querySelector(".errpw2").innerText = "비밀번호를 입력해주세요."
    isValid = false;
  }else {
    document.querySelector(".errpw1").innerText = "";
  }
  if(pw2 === "") {
    document.querySelector(".errpw1").innerText = "비밀번호를 입력해주세요."
    document.querySelector(".errpw2").innerText = "비밀번호를 입력해주세요."
    isValid = false;
  }else {
    document.querySelector(".errpw2").innerText = "";
  }
  if(pw1 !== pw2) {
    document.querySelector(".errpw1").innerText = "비밀번호가 일치하지 않습니다."
    document.querySelector(".errpw2").innerText = "비밀번호가 일치하지 않습니다."
    isValid = false;
  }else {
    document.querySelector(".errpw1").innerText = "";
    document.querySelector(".errpw2").innerText = "";
  }
  if(location === "none") {
    document.querySelector(".errlocation").innerText = "지역을 선택해주세요."
  }else {
    document.querySelector(".errlocation").innerText =  ""
  }
  if(!female && !male) {
    document.querySelector(".errgender").innerText = "성별을 선택해 주세요" ;
    isValid = false;
  } else {
    document.querySelector(".errgender").innerText = ""
  }

  if(isValid) {
    alert("회원가입을 축하합니다")
  }
}
