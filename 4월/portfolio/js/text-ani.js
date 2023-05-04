import { modal } from "./modal.js";

/**
 * 
 * @param {*} selector 셀렉터
 * @param {*} object 문자열 || 문자열 배열
 */
export function textAnimation(selector, object, delay=100, callBack) {
  const element = document.querySelector(selector);
  element.innerHTML = "";

  let descIndex = 0;
  let charIndex = 0;
  let descElement = null;
  let descText = null;
  let textShow = null;

  displayText();

  function displayText() {
    descText = Array.isArray(object) ? object[descIndex].split("") : object.split("");

    textShow = setInterval(callbackDisplay, delay);
  }

  function callbackDisplay() {
    if(charIndex === 0) descElement = document.createElement("p");
    descElement.innerHTML += descText[charIndex];
    element.appendChild(descElement);
    charIndex += 1
  

    if(charIndex === descText.length) {
      clearInterval(textShow);

      if(Array.isArray(object)) {
        descElement = null;
        charIndex = 0;
        descIndex += 1;
        descIndex === object.length ? clearInterval(textShow) : displayText();
      }
      if(callBack) callBack();
    };
  };
  const modalClose = document.querySelector("#closeBtn");
modalClose.addEventListener("click", function () {
  modal.style.transform = "scale(0)";
  document.querySelector("#desc").innerHTML = "";
  clearInterval(textShow);
});

};



    // textAnimation("#desc", project.desc1);
    // document.getElementById("desc").innerHTML = "";
    // let i = 0;
    // let element = null;
    // project.desc1.map(el => {
    //   let text = el.split("");
    //   let time = setInterval(()=>{
    //     if(i === 0)element = document.createElement("p");
    //       element.innerHTML += text[i];
    //       document.querySelector("#desc").appendChild(element);
    //       i += 1;

    //       if(i === text.length) {
    //         clearInterval(time);
    //         i = 0;
    //       }
    //   },100)
    // })