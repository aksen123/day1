const night = document.querySelector(".night");


night.onclick = () => {
  document.body.classList.toggle("dayNight")
  if(night.innerHTML === "다크모드로 바꾸기") {
    night.innerHTML = "라이트모드로 바꾸기"
  } else {
    night.innerHTML = "다크모드로 바꾸기"
  }
}

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const modalBox = document.querySelector("#modal-box");


open.addEventListener("click", () => {
  modalBox.classList.toggle("active");
  if(open.innerHTML === "프로필 보기"){
    open.innerHTML = "프로필 닫기"
  } else {
    open.innerHTML = "프로필 보기"
  }
})
