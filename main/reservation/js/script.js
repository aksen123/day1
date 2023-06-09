
// Reservation-confirm


          //  ### calender  ###

let current_year = new Date().getFullYear();
let current_month = new Date().getMonth()+1;

document.querySelector(".year").innerText = current_year
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

  let mobile_display = "";
  for(let i = 0; i < data.length; i++){
    if(i === 0) {
      mobile_display += "<tr>"
    } else if(i % 7 === 0) {
      mobile_display += "</tr>"
      mobile_display += "<tr>"
    }

    mobile_display +=`<td><a href="#">${data[i]}</a></td>`
  }
  mobile_display += "</tr>";

  document.querySelector("#calendar-table tbody").innerHTML = mobile_display;
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

  changeYearMonth(current_year, current_month);

}

changeYearMonth(current_year,current_month);

// 이전 날짜 색 & 선택 날짜 표시 
function select() {
  let mobile = document.querySelectorAll("#calendar-table td a");
  let today = new Date();

  if(today.getFullYear() === current_year && today.getMonth() + 1 == current_month) {
    mobile.forEach(el => {
      if(el.innerText < today.getDate()) {
        el.style.color = "#ccc";
        el.style.pointerEvents = "none"
      }
    })
  }
  for(let el of mobile) {
    let tds = document.querySelectorAll("#calendar-table td")
    el.addEventListener("click", ()=> {
      tds.forEach(td => {
        td.classList.remove('select')
      })
      el.parentElement.classList.add('select');
    })
  }
}



      // 필수동의 
//약관동의 박스
const agree = document.getElementById('agree');
// 전체 체크박스들
const checkboxes = document.querySelectorAll('.item input[type=checkbox]');


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


      // 결제 버튼 함수

const paymentBtn = document.getElementById('reservation-button-submit');