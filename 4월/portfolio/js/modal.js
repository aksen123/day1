import { projects } from "../constant/modal-data.js";
import { textAnimation } from "./text-ani.js";

let show = document.querySelectorAll(".show");
export const modal = document.querySelector(".modal_wrap");
const bigPic = document.querySelector(".slider");

show.forEach((e) => {
  e.addEventListener("click", function () {
    modal.style.display = "flex";
    modal.style.transform = "scale(1)";
    const project = projects[this.dataset.modal];
    console.log(this.dataset.modal);
    document.querySelector("#desc").innerHTML = "";

    document.querySelector(".modal_title h2").innerText = project.title;
    document.querySelector("#link").href = project.link;
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
      element.addEventListener("click", function () {
        bigPic.src = this.src;
      });
    });
  });
});




import { intro2 } from "../constant/intro.js";
// ##### Description Modal ######
const modalGo = document.querySelector(".info_photo");
const desc_modal = document.querySelector("#desc_modal");
const modalBig = document.querySelector(".desc_modal_img img");
const modalSmall = document.querySelector(".smallImg");
const descClose = document.querySelector(".desc_modal_small button");

modalGo.addEventListener("click", () => {
  desc_modal.style.display = "flex";
  desc_modal.classList.add("on");
  modalSmall.innerHTML = "";

  modalBig.src = intro2.images[0];
  intro2.images.map((image) => {
    const element = document.createElement("img");
    element.src = image;
    element.width = 100;
    element.height = 70;
    modalSmall.append(element);
    element.addEventListener("click", function () {
      modalBig.src = this.src;
    });
  });
});

descClose.addEventListener("click", () => {
  desc_modal.style.display = "none";
  desc_modal.classList.remove("on");
});