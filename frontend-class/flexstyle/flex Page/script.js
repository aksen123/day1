const menuBtn = document.querySelector(".menu_toggle_btn");
const nav = document.querySelector(".nav")


menuBtn.addEventListener("click",()=>{
  nav.classList.toggle("on");
})