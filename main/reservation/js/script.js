// === Reservation ===

// === Item4 Input Auto ===


function changePhone1() {
  const phone1 = document.querySelector("#phone1").value;
  if(phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
}
function changePhone2() {
  const phone2 = document.querySelector("#phone2").value;
  if(phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
}
function changePhone3() {
  const phone3 = document.querySelector("#phone3").value;
  if(phone3.length === 4) {
    document.querySelector("#email").focus();
  }
}

          //  ### calender  ###

let current_year = new Date().getFullYear();
let current_month = new Date().getMonth()+1;

document.querySelector(".year").innerText = current_year;
document.querySelector(".month").innerText = current_month < 10 ? "0" +current_month : current_month;

// 윤년 계산
function checkLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function changeYearMonth(year, month) {
  let month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if(month == 2) {
    if(checkLeapYear(year)) month_day[1] = 29;
  }
  // 1일의 요일 구하기
  let first_day = new Date(`${year}-${month}-01`).getDay();
  
  let arr_calendar = [];


  for(let i = 0; i < first_day; i++) {
    arr_calendar.push("");
  }

  for(let i = 1; i <= month_day[month-1]; i++){
    arr_calendar.push(i)
  }

  let blank_day = 7 - arr_calendar.length % 7
  // console.log(blank_day);

  if(blank_day < 7) {
    for(let i = 0; i < blank_day; i++){
      arr_calendar.push("")
    }
  }
    Calendar(arr_calendar);

    select();
  };
  

function Calendar(data) {

  let display = "";
  for(let i = 0; i < data.length; i++){
    if(i === 0) {
      display += "<tr>"
    } else if(i % 7 === 0) {
      display += "</tr>"
      display += "<tr>"
    }

    display +=`<td><a href="#">${data[i]}</a></td>`
  }
  display += "</tr>";

  document.querySelector("#calendar-table tbody").innerHTML = display;
}

//달력 월 바꾸기
function changeMonth(e) {
  current_month = current_month + e;

  if(current_month == 0) {
    current_year = current_year - 1;
    current_month = 12;
  } else if(current_month == 13) {
    current_year = current_year + 1;
    current_month = 1 
  }

  document.querySelector(".year").innerText = current_year
  document.querySelector(".month").innerText = current_month < 10 ? "0" + current_month : current_month;


  select_event.selectedIndex = 0;
  select_item.selectedIndex = 0;
  timeBox.selectedIndex = 0;
  paymentText()
  
  changeYearMonth(current_year, current_month);
}

changeYearMonth(current_year,current_month);




// 이전 날짜 색 & 선택 날짜 표시 
function select() {
  let days = document.querySelectorAll("#calendar-table td a");
  let today = new Date();

  if(today.getFullYear() === current_year && today.getMonth() + 1 == current_month) {
    days.forEach(el => {
      if(el.innerText < today.getDate()) {
        el.style.color = "#ccc";
        el.style.pointerEvents = "none"
      }
    })
  }else if((today.getFullYear() > current_year) ||
          (today.getFullYear() === current_year && today.getMonth() + 1 > current_month)) {
      days.forEach(el =>{
      el.style.color = "#ccc";
      el.style.pointerEvents = "none"
    })
  }

  for(let el of days) {
  
    let tds = document.querySelectorAll("#calendar-table td")
    el.addEventListener("click", (e)=> {
      e.preventDefault()
      tds.forEach(td =>  td.classList.remove('select'));
      el.parentElement.classList.add('select');

      document.querySelectorAll('.reservation-item-content.select-box').forEach(el => {

        el.previousElementSibling.style.display = "none"
        el.style.display = "flex";
        select_event.selectedIndex = 0;
        timeBox.selectedIndex = 0;
        select_item.selectedIndex = 0
      });
      paymentText();
    })
  }
}
// 낮, 밤선택시 행사 선택
let select_event = document.querySelector("#select-event");
const select_item = document.querySelector('#select-event-day');
let timeBox = document.querySelector("#select-time");

function display(selector1, selector2) {

  select_item.innerHTML = ""
  timeBox.innerHTML = ""

  if(select_event.selectedIndex !== 0) {

    events[select_event.selectedIndex - 1].forEach(el =>{
      let option = document.createElement("option");
      option.innerText = el.title;
      option.value = el.value;
      select_item.appendChild(option); 
    });
    event_time[select_event.selectedIndex - 1].forEach(el =>{
      let option = document.createElement("option");
      option.innerText = el.title;
      option.value = el.value;
      timeBox.appendChild(option); 
    });
    select_item.options[0].disabled = true;
    timeBox.options[0].disabled = true;
    console.log(select_item.options[0]);
    
  }
}
select_event.addEventListener('change', display)

//행사 회차 선택시 금액표시
//회차선택
//티켓선택 추가하기
function paymentText(){
  let value = +timeBox[timeBox.selectedIndex].value;
  console.log(value)
  document.querySelector(".public-price").innerText =
  value === '' ? "0원" : value.toLocaleString() + "원";
  document.querySelector(".discount-price").innerText =
  value === '' ? "0원" : (value / 2).toLocaleString() + "원";

}

timeBox.addEventListener("change",paymentText);


// ####### 필수동의 #######

//전체동의 박스
const agree = document.getElementById('agree');

// 체크박스들
const checkboxes = document.querySelectorAll('.item input[type=checkbox]');

//전체동의
agree.addEventListener("click", ()=> {
  if(agree.checked === true){
    checkboxes.forEach(el =>{
      el.checked = true;
    })
  } else {
    checkboxes.forEach(el =>{
      el.checked = false
    })
  }
  payBtnDisabled()
});


//체크박스중 하나 해제되면 약관동의 박스 해제 
function checkSelectAll()  {
  // 선택된 체크박스
  const checked 
    = document.querySelectorAll('.item input[type=checkbox]:checked');
  if(checkboxes.length === checked.length)  {
    agree.checked = true;
  }else {
    agree.checked = false;
  }
  payBtnDisabled()
}
// 체크박스 눌렀을때 결제버튼 활성화
function payBtnDisabled() {
  const checkedBox = document.querySelectorAll('input[type=checkbox]:checked')
  if(checkedBox.length === 5 ) {
    paymentBtn.disabled = false}
}


// ####### 결제 버튼 #######
const paymentBtn = document.getElementById('reservation-button-submit');

//input
const userName = document.querySelector("#name");
const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


const phones = document.querySelectorAll(".phoneNum")
userName.addEventListener("focusout",checkValue);
email.addEventListener("focusout",checkValue);
password.addEventListener("focusout",checkValue);
phones.forEach(phone =>{
  phone.addEventListener("focusout",checkValue)
})

function checkValue(element) {
  if(this.value === "") {
    this.placeholder = "내용을 입력해주세요"
  }
  if(element.value === "") element.placeholder = "내용을 입력해주세요"
}


//결제버튼 눌렀을때!!
paymentBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  payment()
})

function payment() {
  const allInput = document.querySelectorAll(".reservation-info input")

  if(timeBox.selectedIndex < 1) alert("회차를 선택해주세요");
  if(userName.value == "" || phone1.value =="" || phone2.value =="" 
  ||phone3.value =="" || password.value =="" || email.value =="")
    alert("......") ;
  if(email.value != "" ||email.value.includes("@") === false) alert("이메일 양식이 올바르지 않습니다")
  

  
  console.log("1")
}


function addTicket(num,event) {
  let count = event.currentTarget.parentNode.children[1]
  const text = +count.innerText + num
  text < 0 || text > 4 ? text = text  : false

  count.innerText = text

  // console.log(num);  
  // console.log(count);  
  totalPrice()
}


//총 인원 가격 뿌려주기 하셈 
function totalPrice() {
  const public = document.querySelector(".public.count").innerText;
  const discount = document.querySelector(".discount.count").innerText;


  //가격 계산
  const origin_price =+timeBox[timeBox.selectedIndex].value
  const public_price = origin_price * +public
  const discount_price = (origin_price / 2) * +discount

  const total_price = public_price + discount_price

  console.log(origin_price)
}