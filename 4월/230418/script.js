const container = document.querySelector("#container"); //3. 이미지 출력 공간
const today = new Date(); // 1.현시점 날짜 시간 갖고옴
const hrs = today.getHours() // 2-1.현시점에서 시간만 갖고옴

let newImg = document.createElement("img");
newImg.src = (hrs < 12) ?  "./img/morning.jpg" : "./img/afternoon.jpg"

container.appendChild(newImg);