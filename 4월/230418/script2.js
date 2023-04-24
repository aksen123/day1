const btn = document.querySelector("button");
const show = document.querySelector("#show");

let count = 0
let hello = setInterval(() => {
  const newText = document.createElement('div');
  newText.classList.add('noti');
  let text = ["안녕", "하세", "요"];
  newText.innerText = text[count];
  show.appendChild(newText)
  count++;
  if(count === 3) clearInterval(hello)
},500)


btn.addEventListener("click", () => {
  const noti = document.createElement('div');
  noti.classList.add('noti');
  noti.innerText = "항상 응원합니다";
  show.appendChild(noti);
  setTimeout(() => {
    noti.remove()
  }, 3000)
});




// btn.addEventListener("click", () => {
//   show.appendChild(newP);
//   setTimeout(del, 3000)
// });

// function del() {
//   newP.remove()
// }