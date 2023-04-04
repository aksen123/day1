let bigPic = document.querySelector("#cup");
let smallpics = document.querySelectorAll(".small");

for(let i = 0; i < smallpics.length; i++) {
  smallpics[i].addEventListener('click', changePic)
}

function changePic() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic);
}

let isOpne = false;
let view = document.querySelector("#view");
view.addEventListener("click", pageOpen);


function pageOpen() {
  if(isOpne == false) {
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpne = true;
  } else {
    document.querySelector("#detail").style.display = "none";
    view.innerHTML = "상세 설명 보기";
    isOpne = false;
  }
}