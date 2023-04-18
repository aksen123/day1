const intBtn = document.querySelector("#intBtn");
const pjBtn = document.querySelector("#pjBtn");
const profileSection = document.querySelector(".profile .wrap");
const projectSection = document.querySelector(".project .wrap");


const left = document.querySelector(".left_scetion");
const right = document.querySelector(".Right_page");

// Section Btn

intBtn.addEventListener("click", () => {
  profileSection.classList.remove("on2")
  projectSection.classList.add("on2")
})
pjBtn.addEventListener("click", () => {
  projectSection.classList.remove("on2")
  profileSection.classList.add("on2")
})

// Dark Btn
const btns = document.querySelectorAll(".dark .bi");

function night() {
  left.style.color = "bisque"
  left.style.backgroundColor = "#000"
  right.style.color = "bisque"
  right.style.backgroundColor = "#000"
  profileSection.style.color = "bisque"
  profileSection.style.backgroundColor = "#222"
  projectSection.style.color = "bisque"
  projectSection.style.backgroundColor = "#222"
}
function day() {
  left.style.color = "#000"
  left.style.backgroundColor = "#fff"
  right.style.color = "#000"
  right.style.backgroundColor = "#fff"
  profileSection.style.color = "#000"
  profileSection.style.backgroundColor = "#fff"
  projectSection.style.color = "#000"
  projectSection.style.backgroundColor = "#fff"
}

btns.forEach((e) => {
  e.addEventListener("click", (e) => {
    if(e.target.id === 'day') {
      btns[0].classList.toggle("active");
      btns[1].classList.toggle("active");
      night();
    } else if(e.target.id ==='night'){
      btns[1].classList.toggle("active");
      btns[0].classList.toggle("active")
      day();
    }
  })
})

// for(let el of btns) {
//   el.addEventListener("click", function() { 
//     if(this.id === 'day') {
//       btns[0].classList.add("active");
//       btns[1].classList.add("active2");
//       night();
//     } else if(this.id ==='night') {
//       btns[1].classList.remove("active2");
//       btns[0].classList.remove("active");
//       day();
//     }
//   })
// }