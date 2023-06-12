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
  }
  for(let el of days) {
  
    let tds = document.querySelectorAll("#calendar-table td")
    el.addEventListener("click", (e)=> {
      e.preventDefault()
      tds.forEach(td =>  td.classList.remove('select'));
      el.parentElement.classList.add('select');

      document.querySelectorAll('.reservation-item-content.select-box').forEach(el => {
        document.querySelector(".item2 .desc").style.display = "none";
        document.querySelector(".item3 .desc").style.display = "none";
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
function display() {

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

//행사 회차 선택시 결제금액 표시
//회차선택
let timeBox = document.querySelector("#select-time");
function paymentText(){
  let value = +timeBox[timeBox.selectedIndex].value;
  document.querySelector(".reservation-item-heading span").innerText =
  value === '' ? "0원" : value.toLocaleString() + "원"
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
}


// ####### 결제 버튼 #######

const paymentBtn = document.getElementById('reservation-button-submit');

const userName = document.querySelector("#name");
const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

paymentBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  payment()
})
function payment() {
  const checkedBox = document.querySelectorAll('input[type=checkbox]:checked')


  if(userName.value === "a") userName.placeholder = "이름을 입력해주세요"

}