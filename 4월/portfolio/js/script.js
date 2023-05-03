// import { projects } from "../constant/modal-data.js";
import { textAnimation } from "./text-ani.js";
import { intro } from "../constant/intro.js";
import { modal } from "./modal.js";


const intBtn = document.querySelector("#intBtn");
const pjBtn = document.querySelector("#pjBtn");

export const profileSection = document.querySelector(".profile .wrap");
export const projectSection = document.querySelector(".project .wrap");

export const left = document.querySelector(".left_section");
export const right = document.querySelector(".Right_page");

document.addEventListener("DOMContentLoaded", function () {
  textAnimation(".intro #title", intro.title,100, () => {
    textAnimation(".intro #message", intro.message);
  });
});

// ########## Section Btn ##########

intBtn.addEventListener("click", () => {
  profileSection.classList.remove("on2");
  projectSection.classList.add("on2");
  document.querySelector(".project").style.zIndex = -1;
  close();
});
pjBtn.addEventListener("click", () => {
  projectSection.classList.remove("on2");
  profileSection.classList.add("on2");
  document.querySelector(".project").style.zIndex = 1;
  close();
});

function close() {
  modal.style.transform = "scale(0)";
}
