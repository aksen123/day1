import { dayEvent, nightEvent } from "./data.js";


const dayBtn = document.querySelector("#day");
const nightBtn = document.querySelector("#night");
const banner = document.querySelector(".event-banner img")
let cards =  document.querySelector(".event-cards");

let url = location.search;

if(url.includes("day")) {
  dayBtn.checked = true;
  banner.src = "./img/day-banner.png"
  eventCard(dayEvent);
} else {
  nightBtn.checked = true;
  banner.src = "./img/night-banner.png"
  eventCard(nightEvent);
}

dayBtn.addEventListener("click", ()=>{
  let currentUrl = new URLSearchParams(url);
  currentUrl.set("type", "day");
  location.href = location.pathname+'?'+currentUrl.toString();
})
nightBtn.addEventListener("click", ()=>{
  let currentUrl = new URLSearchParams(url);
  currentUrl.set("type", "night");
  location.href = location.pathname+'?'+currentUrl.toString();
})

function eventCard(arr) {
  cards.replaceChildren();
  arr.forEach((el, i) => {
  cards.innerHTML += `
  <div class="event-card">
  <img src=${el.src} alt="">
  <div class="card-desc">
    <h2>${el.title}</h2>
    <div class="time-wrap">
      <p>
      <i class="fa-solid fa-calendar-days"></i>
      행사 날짜 
      <span>${el.date}</span>
      </p>
      <p>
      <i class="fa-regular fa-clock"></i> 
      관람 시간 
      <span>${el.time}</span>
      </p>
    </div>
    <div class="desc">
      <h3>행사내용</h3>
      <p>
        ${el.desc}
      </p>
    </div>
    <div class="view-wrap">
    <a href="#" data-event=${i}>
      <button class="view-more">더보기 
      <i class="fa-solid fa-arrow-right"></i>
      </button>
    </a>
  </div>
  </div>
</div>
  `
  })
  let a = document.querySelectorAll(".view-wrap a");
console.log(a)
}



