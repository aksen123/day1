import { dayEvent } from "./data.js";

const dayBtn = document.querySelector("#day");
const nightBtn = document.querySelector("#night");
let cards =  document.querySelector(".event-cards")
dayBtn.addEventListener("click", ()=>{
  if(dayBtn.checked) {
    cards.innerHTML = ""
    dayEvent.forEach((el, i) => {
      let card = document.createElement("div");
      card.className = "event-card "
      console.log(i)
      cards.appendChild(card)
    })
  }
})

// if(dayBtn.checked === true) {
//   document.querySelector(".event-cards").innerHTML = ""
//   console.log(dayEvent)
// }else if(nightBtn.checked === true) {
//   document.querySelector(".event-cards").innerHTML = `
//   <div class="event-card">
//   <img src="http://www.placehold.it/600x300" alt="">
//   <div class="card-desc">
//     <h2>가정의 달, 푸르른 5월의 궁</h2>
//     <div class="time-wrap">
//       <p><i class="fa-solid fa-calendar-days"></i> 행사 날짜 <span>2023.05.15~06.15</span></p>
//       <p><i class="fa-regular fa-clock"></i> 관람 시간 <span>9:00 ~ 16:00</span></p>
//     </div>
//     <div class="desc">
//       <h3>행사내용</h3>
//       <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in sit incidunt enim excepturi asperiores minus ipsam nobis necessitatibus quam.
//       </p>
//     </div>
//     <div class="view-wrap">
//       <button class="view-more">더보기 <i class="fa-solid fa-arrow-right"></i> </button>
//     </div>
//   </div>
// </div>
//   `
// }