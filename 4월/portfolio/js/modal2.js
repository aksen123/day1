
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
