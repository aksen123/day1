const originBtn = document.querySelector("#originBtn");
const selecBtn = document.querySelector("#selecBtn");
const result = document.querySelector("#result");
const lottoText = document.querySelector("#luckWrap h1");
let numbers = document.querySelectorAll("input");
let luckNum = [...Array(45).keys()].map(el => el +1); //1 ~ 45 담은곳  


originBtn.addEventListener("click", () =>{
  result.innerHTML = "";
  let remove = document.querySelectorAll(":checked");
  remove = [...remove].map(el => Number(el.value));
  console.log(remove)

  luckNum = luckNum.filter(el => {
    if(!remove.includes(el)) return el
  })
  // console.log(luckNum);

  canvas.style.display = "block";
  document.querySelector("form").style.display = "none"
  let count = 0;

  const pickNum = setInterval(() => {
    let index = Math.floor(Math.random() * luckNum.length);
    const num = luckNum[index];
    luckNum[index] = undefined;
    luckNum = luckNum.filter((value) => value !== undefined);
    count += 1;

    let ball = document.createElement("span");
    ball.className = "ball";
    ball.innerHTML = num;
    ball.classList.toggle(
      num <= 10  ? "color1"
      : num <= 20 ? "color2"
      : num <= 30 ? "color3"
      : num <= 40 ? "color4" : "color5"
    );

    result.appendChild(ball);

    [...document.querySelectorAll(".ball")]
    .sort((a, b) => 
      Number(a.innerHTML) - Number(b.innerHTML)
    )
    .forEach(el => result.appendChild(el))

    if(count === 6) {
      clearInterval(pickNum);
      canvas.style.display = "none";
      document.querySelector("form").style.display = "block"
    }
  },500)

})



selecBtn.addEventListener("click", () => {
  result.innerHTML = "";
  let selecNum = document.querySelectorAll(":checked");
  selecNum = [...selecNum].map(el => Number(el.value));


  if(selecNum.length <= 6) {
    alert("7개 이상 선택해 주세요");
  }else {


    canvas.style.display = "block";
    document.querySelector("form").style.display = "none"
    let count = 0;
    const pickNum = setInterval(() => {
    let index = Math.floor(Math.random() * selecNum.length);
    
    const num = selecNum[index];
    selecNum[index] = undefined;
    selecNum = selecNum.filter((value) => value !== undefined);
    count += 1;
    
    let ball = document.createElement("span");
    ball.className = "ball";
    ball.innerHTML = num;
    ball.classList.toggle(
      num <= 10  ? "color1"
      : num <= 20 ? "color2"
      : num <= 30 ? "color3"
      : num <= 40 ? "color4" : "color5"
      );
      
      result.appendChild(ball);
      //추첨번호 오름차순 정렬
      [...document.querySelectorAll(".ball")]
      .sort((a, b) => 
      Number(a.innerHTML) - Number(b.innerHTML)
      )
      .forEach(el => result.appendChild(el))
      
      if(count === 6) {
        clearInterval(pickNum)
        canvas.style.display = "none";
        document.querySelector("form").style.display = "block";
      }
    },500)
  }
});





const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
function circle(x, y ,radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dy = Math.floor(Math.random() * 4) + 1;

  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  this.animate = function() {
    this.x += this.dx;
    this.y += this.dy;

    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.draw();
  }
};

const objs = [];

for(let i = 0; i < 20; i++){
  const radius = 20
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

  objs.push(new circle(x, y, radius, color));
};

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let el of objs) {
    // let obj = el;
    el.animate();
  }
  requestAnimationFrame(update);
}

update();