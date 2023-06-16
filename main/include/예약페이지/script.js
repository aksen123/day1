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
  
  changeYearMonth(current_year, current_month);
  hidingBox()
}

changeYearMonth(current_year,current_month);




          //날짜 선택
function select() {
  let days = document.querySelectorAll("#calendar-table td a");
  let today = new Date();
// 이전 날짜 비활성화 & 선택 날짜 표시
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

  //선택날짜 선택 표시 및 행사선택 띄우기
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
      hidingBox()
    })
  }
}


// 낮, 밤 선택시 행사 선택
let select_event = document.querySelector("#select-event"); //낮,밤 선택
let select_item = document.querySelector('#select-event-day'); //행사
let timeBox = document.querySelector("#select-time");//회차
let ticketBox =  document.querySelector(".select-box2") //티켓


function displayEvent(select1,variable) {

    select1.innerHTML = ""

  
    if(select_event.selectedIndex !== 0) {
  
      variable[select_event.selectedIndex - 1].forEach(el =>{
        let option = document.createElement("option");
        option.innerText = el.title;
        option.value = el.value;
        select1.appendChild(option); 
      });
      public.innerText = 0
      discount.innerText = 0 
      select1.options[0].disabled = true;
      select1.options[0].value = 0;
    }
    payBtnDisabled()
  }
      // 셀렉트 이벤트
//낮 ,밤
select_event.addEventListener('change',()=>{
  displayEvent(select_item,events)
  let time_option =  `<option value="0" disabled selected>회차를 선택해 주세요</option>`
  timeBox.innerHTML = time_option
  ticketBox.style.display ="none"
  ticketBox.previousElementSibling.style.display = 'block'

  totalPrice();
})

//낮, 밤 행사선택
select_item.addEventListener('change',()=>{
  displayEvent(timeBox,event_time)
  paymentText()
})

//회차선택
timeBox.addEventListener("change",paymentText);


//행사 회차 선택시, 금액표시
function paymentText(){
  let value = +timeBox[timeBox.selectedIndex].value;

  //일반
  document.querySelector(".public-price").innerText = value.toLocaleString();
  //할인
  document.querySelector(".discount-price").innerText = (value / 2).toLocaleString();

  document.querySelector(".add-item .desc").style.display = "none"
  ticketBox.style.display = "block";

  totalPrice()
}


//티켓 버튼 함수
function addTicket(num,event) {
  let count = event.currentTarget.parentNode.children[1]
  const text = +count.innerText + num
  text < 0 || text > 4 ? text = count.innerText  : false


  count.innerText = text
 // console.log(event.currentTarget)
  totalPrice()
  payBtnDisabled()
}

  let public = document.querySelector(".public.count");
  let discount = document.querySelector(".discount.count");
function totalPrice() {
  //총 인원, 가격 뿌려주기



  //가격 계산
  const origin_price =+timeBox[timeBox.selectedIndex].value
  const public_price = origin_price * +public.innerText
  const discount_price = (origin_price / 2) * +discount.innerText

  const total_price = public_price + discount_price

  //console.log(origin_price,public_price,discount_price,total_price);
  //console.log(timeBox.selectedIndex)
  
  if(timeBox.selectedIndex === 0) {
    public.innerText = 0
    discount.innerText = 0 
  }
  
  document.querySelector(".total-person").innerText = +public.innerText + +discount.innerText
  //결제금액
  document.querySelector(".total-price").innerText =  total_price.toLocaleString() + "원";
}



// 날짜 , 월 변경시 티켓박스 감추기
function hidingBox() {
  if(timeBox.selectedIndex === 0) {
    let item_option = `<option value="0" disabled selected>행사를 선택해 주세요</option>`
    let time_option =  `<option value="0" disabled selected>회차를 선택해 주세요</option>`
    
    select_item.innerHTML = item_option
    timeBox.innerHTML = time_option

    public.innerText = 0
    discount.innerText = 0 


    ticketBox.style.display ="none"
    ticketBox.previousElementSibling.style.display = 'block'
    totalPrice()
    payBtnDisabled()
  }
}







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

// 결제버튼 활성화
function payBtnDisabled() {
  let check_bool = true;
  let public = document.querySelector(".public.count");
  let discount = document.querySelector(".discount.count");
  const checked 
  = document.querySelectorAll('input[type=checkbox]:checked')
  const payment =  document.querySelector("#select-payment");

  if(public.innerText < 1 && discount.innerText < 1) check_bool = false;
  if(userName.value === "") check_bool = false;
  if(phone1.value =="" || phone2.value =="" || phone3.value =="") check_bool = false
  if(email.value === "") check_bool = false;
  if(password.value ==="") check_bool = false;
  if(checked.length < 5) check_bool = false;
  if(payment.selectedIndex < 1) check_bool = false;

check_bool === true ? paymentBtn.disabled = false : paymentBtn.disabled = true

 console.log(check_bool,public.innerText, discount.innerText)
}




//input
const userName = document.querySelector("#name");
const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


const phones = document.querySelectorAll(".phoneNum")
userName.addEventListener("focusout",payBtnDisabled);
email.addEventListener("focusout",payBtnDisabled);
password.addEventListener("focusout",payBtnDisabled);
phones.forEach(phone =>{
  phone.addEventListener("focusout",payBtnDisabled)
})




//결제버튼 눌렀을때
paymentBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  payment()
})

function payment() {
  let check_bool = true
  
  if(userName.value.length < 2) {check_bool = false; userName.focus();}
  if(phone1.value !== "010" || phone2.value.length < 4 || phone3.value.length < 4)
    {check_bool = false; phone1.focus();}
  if(!email.value.includes("@")){ check_bool = false; email.focus();}
  if(password.length < 5) {check_bool = false; password.focus()}

  check_bool ? alert(`${userName.value}님 예매 완료`) : alert("예매자 정보다시입력")
}

