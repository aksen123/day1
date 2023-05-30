/*##### 달력 ##### */

// 현재 년 월
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
  console.log(blank_day);

  if(blank_day < 7) {
    for(let i = 0; i < blank_day; i++){
      arr_calendar.push("")
    }
  }
    mobile_Calendar(arr_calendar);
    pc_Calendar(arr_calendar);

    let calendar_link = document.querySelectorAll(".calendar a");
    calendar_link.forEach((el,i) => {
      el.href = "./test.html";
    });
    today();
};


function pc_Calendar(data) {

  let pc_display = "<tr>";
  data.filter((el, i) => {
    if(el !== "" && i % 7 === 0){
      pc_display +=`<td><a href="#" style="color:red;">${data[i]}</a></td>`
    } else if(el !=="" && i % 7 === 6) {
      pc_display +=`<td><a href="#" style="color:blue;">${data[i]}</a></td>`
    }else if(el !== ""){
      pc_display +=`<td><a href="#">${data[i]}</a></td>`
    }
  });

  pc_display += "</tr>";

  document.querySelector(".calendar .pc-calendar").innerHTML = pc_display;
}



function mobile_Calendar(data) {

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

  document.querySelector(".calendar .mobile-calendar").innerHTML = mobile_display;
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


// 오늘 날짜 표시 해주기
function today() {
  let mobile = document.querySelectorAll(".mobile-calendar a");
  let pc = document.querySelectorAll(".pc-calendar a");
  let today = new Date();
  if(today.getFullYear() === current_year && today.getMonth()+1 == current_month) {
    for(let el of mobile) {
      if(el.innerText == today.getDate()) {
        el.parentElement.classList.add('today');
        console.log(el)
        break;
      }
    }
    for(let el of pc) {
      if(el.innerText == today.getDate()) {
        el.parentElement.classList.add('today');
        console.log(el)
        break;
      }
    }
  }
}



/*##### 슬라이드 ##### */


let slides = document.querySelector(".slide-items"),
    slide = document.querySelectorAll(".slide-items li"),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 405,
    prevBtn = document.querySelector(".item-prev-btn"),
    nextBtn = document.querySelector(".item-next-btn")


  makeClone();

  function makeClone() {
    slide.forEach(li => {
      let cloneSlide = li.cloneNode(true);
      cloneSlide.classList.add("clone")
      slides.appendChild(cloneSlide);
    })
    slide.forEach(li => {
      let cloneSlide = li.cloneNode(true);
      cloneSlide.classList.add("clone")
      slides.insertBefore(cloneSlide, slide[0]);
    })

    updateWidth();
    setTimeout(()=> {
      slides.classList.add('move')
    },100)
  };


  function updateWidth() {
    let currentSlide = document.querySelectorAll(".slide-items li");
    console.log(currentSlide);
    let newSlideCount = currentSlide.length;
    let newWidth = slideWidth * newSlideCount + 'px';
    let translateValue = - slideWidth * slideCount
    console.log(newWidth);
    currentSlide.forEach(el => {
      // el.style.width = slideWidth * newSlideCount / 
    })
    slides.style.width = newWidth;
    slides.style.transform = `translateX(${translateValue}px)`
  }

  prevBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    moveSilde(currentIdx - 1)
  })
  nextBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    moveSilde(currentIdx + 1)
  })
  function moveSilde(num) {
    slides.style.left = -num*slideWidth + 'px';
    currentIdx = num;
    console.log(currentIdx);

    if(currentIdx === slideCount || currentIdx === -slideCount) {
      setTimeout(()=>{
        slides.classList.remove("move");
        slides.style.left = '0px';
        currentIdx = 0;
      },500)
      setTimeout(()=>{
        slides.classList.add("move")
      },600)
    }
  }

