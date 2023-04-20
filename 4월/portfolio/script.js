const intBtn = document.querySelector("#intBtn");
const pjBtn = document.querySelector("#pjBtn");
const profileSection = document.querySelector(".profile .wrap");
const projectSection = document.querySelector(".project .wrap");


const left = document.querySelector(".left_scetion");
const right = document.querySelector(".Right_page");

// ########## Section Btn ##########

intBtn.addEventListener("click", () => {
  profileSection.classList.remove("on2")
  projectSection.classList.add("on2")
})
pjBtn.addEventListener("click", () => {
  projectSection.classList.remove("on2")
  profileSection.classList.add("on2")
})

// ########## Dark Btn ##########

const btns = document.querySelectorAll(".dark .bi");

function night() {
  left.style.color = "#fff"
  left.style.backgroundColor = "#000"
  right.style.color = "#fff"
  right.style.backgroundColor = "#000"
  profileSection.style.color = "#fff"
  profileSection.style.backgroundColor = "#222"
  projectSection.style.color = "#fff"
  projectSection.style.backgroundColor = "#222"
}
function day() {
  left.style.color = "#000"
  left.style.backgroundColor = "#fff"
  right.style.color = "#000"
  right.style.backgroundColor = "#fff"
  profileSection.style.color = "#000"
  profileSection.style.backgroundColor = "#fff"
  projectSection.style.color = "#000"
  projectSection.style.backgroundColor = "#fff"
}

btns.forEach((e) => {
  e.addEventListener("click", (e) => {
    if(e.target.id === 'day') {
      btns[0].classList.toggle("active");
      btns[1].classList.toggle("active");
      night();
    } else if(e.target.id ==='night'){
      btns[1].classList.toggle("active");
      btns[0].classList.toggle("active")
      day();
    };
  });
});


// ########## Modal ##########
const projects = [
  {
    title : "Portfolio Page",
    desc1 : "설명1", 
    desc2 : "설명2",
    images : []
  },

  {
    title : "Mobile WebPage",
    desc1 : "설명2", 
    desc2 : "설명2",
    images : []
  },

  {
    title : "Responsive Page",
    desc1 : "설명3", 
    desc2 : "설명2",
    images : []
  }
]

let show = document.querySelectorAll(".show");
const modal = document.querySelector(".modal_wrap")
show.forEach((e)=> {
  e.addEventListener("click", function() {
    modal.style.display = "block"
    const project = projects[this.dataset.modal];

    document.querySelector(".modal_title h2").innerText = project.title;
    document.querySelector(".modal_title p").innerHTML = project.desc1;
    // 이미지 넣기 아직 안함 / css스타일도 X
    console.log(this.dataset.modal)
  });
});


// test 

const btn = document.querySelector("#closeBtn");
btn.addEventListener("click", () => {
  modal.style.display = "none"
})