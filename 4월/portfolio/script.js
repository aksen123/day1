import { projects } from "./constant/modal-data.js";
import { textAnimation } from "./js/text-ani.js";
import { intro } from "./constant/intro.js";
const intBtn = document.querySelector("#intBtn");
const pjBtn = document.querySelector("#pjBtn");
const profileSection = document.querySelector(".profile .wrap");
const projectSection = document.querySelector(".project .wrap");


const left = document.querySelector(".left_section");
const right = document.querySelector(".Right_page");

// document.addEventListener("DOMContentLoaded", function () {
//   textAnimation(".intro #title", intro.title, () => {
//     textAnimation(".intro #message", intro.message);
//   });
// });


textAnimation(".intro #title", intro.title, () =>{
  textAnimation(".intro #message", intro.message)
});


// ########## Section Btn ##########

intBtn.addEventListener("click", () => {
  profileSection.classList.remove("on2");
  projectSection.classList.add("on2");
  close()
});
pjBtn.addEventListener("click", () => {
  projectSection.classList.remove("on2");
  profileSection.classList.add("on2");
  close()
});

// ########## Dark Btn ##########

const btns = document.querySelectorAll(".dark .bi");
const remote = document.querySelectorAll(".control .bi");

function dayAndNight(day) {
  const white = "#fff";
  const black = "#000";
  left.style.color = day ? white : black
  left.style.backgroundColor = day ? black : white
  right.style.color = day ? white : black
  right.style.backgroundColor = day ? black : white
  profileSection.style.color = day ? white : black
  profileSection.style.backgroundColor = day ? "#222" : white
  projectSection.style.color = day ? white : black
  projectSection.style.backgroundColor = day ? "#222" : white
  modal.style.color = day ? white : black
  modal.style.backgroundColor = day ? "#222" : "#eee"
}

remote.forEach((e) => {
  e.addEventListener("click", (e) => {
      [...btns].map(el => el.classList.toggle("active"));
      [...remote].map(el => el.classList.toggle("active"));
      dayAndNight(e.target.id === "day")
  });
});




let show = document.querySelectorAll(".show");
const modal = document.querySelector(".modal_wrap")
const bigPic = document.querySelector(".slider");

show.forEach((e)=> {
  e.addEventListener("click", function() {
    modal.style.display = "flex"
    modal.style.transform = "scale(1)"
    const project = projects[this.dataset.modal];
    console.log(this.dataset.modal)

    document.querySelector(".modal_title h2").innerText = project.title;


    textAnimation("#desc", project.desc1);

    const imagesElement = document.querySelector(".smallPic");
    imagesElement.innerHTML = "";

    bigPic.src = project.images[0];

    project.images.map((image) => {
      // console.log(image);
      const element = document.createElement("img");
      element.src = image;
      element.width = 150;
      element.height = 70;
      imagesElement.append(element);
      element.addEventListener("click", function() {
        bigPic.src = this.src; 
      })
      });
  });
});

const modalClose = document.querySelector("#closeBtn");
modalClose.addEventListener("click", function (){
  modal.style.transform = "scale(0)"
});

function close() {
  modal.style.transform = "scale(0)";
}