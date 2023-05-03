import { projects } from "../constant/modal-data.js";
import { textAnimation } from "./text-ani.js";

let show = document.querySelectorAll(".show");
export const modal = document.querySelector(".modal_wrap")
const bigPic = document.querySelector(".slider");

show.forEach((e)=> {
  e.addEventListener("click", function() {
    
    modal.style.display = "flex"
    modal.style.transform = "scale(1)"
    const project = projects[this.dataset.modal];
    console.log(this.dataset.modal)
    document.querySelector("#desc").innerHTML = "";

    document.querySelector(".modal_title h2").innerText = project.title;
    document.querySelector("#link").href = project.link
    textAnimation("#desc", project.desc1, 50);


    const imagesElement = document.querySelector(".smallPic");
    imagesElement.innerHTML = "";

    bigPic.src = project.images[0];

    project.images.map((image, i) => {
      console.log(i);
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
  modal.style.transform = "scale(0)";
  document.querySelector("#desc").innerHTML = "";
});

