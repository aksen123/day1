const intBtn = document.querySelector("#intBtn");
const pjBtn = document.querySelector("#pjBtn");
const profileSection = document.querySelector(".profile .wrap");
const projectSection = document.querySelector(".project .wrap");


const left = document.querySelector(".left_scetion");
const right = document.querySelector(".Right_page");


// ########## Section Btn ##########

intBtn.addEventListener("click", () => {
  profileSection.classList.remove("on2");
  projectSection.classList.add("on2");
});
pjBtn.addEventListener("click", () => {
  projectSection.classList.remove("on2");
  profileSection.classList.add("on2");
});

// ########## Dark Btn ##########

const btns = document.querySelectorAll(".dark .bi");
const remote = document.querySelectorAll(".control .bi");

function night() {
  left.style.color = "#fff"
  left.style.backgroundColor = "#000"
  right.style.color = "#fff"
  right.style.backgroundColor = "#000"
  profileSection.style.color = "#fff"
  profileSection.style.backgroundColor = "#222"
  projectSection.style.color = "#fff"
  projectSection.style.backgroundColor = "#222"
  modal.style.color = "#fff"
  modal.style.backgroundColor = "#222"
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
  modal.style.color = "#000"
  modal.style.backgroundColor = "#eee"
}

remote.forEach((e) => {
  e.addEventListener("click", (e) => {
    if(e.target.id === 'day') {
      btns[0].classList.toggle("active");
      btns[1].classList.toggle("active");
      remote[0].classList.toggle("active");
      remote[1].classList.toggle("active");
      night();
    } else if(e.target.id ==='night'){
      btns[1].classList.toggle("active");
      btns[0].classList.toggle("active");
      remote[0].classList.toggle("active");
      remote[1].classList.toggle("active");
      day();
    };
  });
});


// ########## Modal ##########
const projects = [
  {
    title : "Portfolio Page",
    desc1 : ["설명1", "설명2", "설명3", "설명4"], 
    images : ["./img/test/pic-1.jpg","./img/test/pic-2.jpg","./img/test/pic-3.jpg","./img/test/pic-4.jpg",]
  },

  {
    title : "Mobile WebPage",
    desc1 : ["설명2"], 
    images : ["./img/test/bg-1.jpg","./img/test/bg-2.jpg","./img/test/bg-3.jpg","./img/test/bg-4.jpg"]
  },

  {
    title : "Responsive Page",
    desc1 : ["설명3"], 
    images : []
  },

  {
    title : "...",
    desc1 : ["설명4"], 
    images : []
  },

  {
    title : "...",
    desc1 : ["설명5"], 
    images : []
  },

  {
    title : "...",
    desc1 : ["설명6"], 
    images : []
  }
]

let show = document.querySelectorAll(".show");
const modal = document.querySelector(".modal_wrap")
const bigPic = document.querySelector(".slider");

show.forEach((e)=> {
  e.addEventListener("click", function() {
    modal.style.display = "flex"
    modal.style.transform = "scale(1)"
    const project = projects[this.dataset.modal];
    console.log(this.dataset.modal)

    document.querySelector(".modal_title h2").innerText = project.title;
    // document.querySelector(".modal_title p").innerHTML = project.desc1;
    let charIndex = 0
    let descElement = null;
    document.getElementById("desc").innerHTML = "";
    project.desc1.map((desc) => {
      let text = desc.split("");
      let aniText = setInterval(()=>{
        if(charIndex === 0) descElement = document.createElement("p");
        descElement.innerHTML += text[charIndex];
      document.getElementById("desc").appendChild(descElement);
        charIndex += 1;

        if(charIndex === text.length) clearInterval(aniText);
      },1000)
      console.log(charIndex)
      // const descElement = document.createElement("p");
      // descElement.innerHTML = desc;
      // document.getElementById("desc").appendChild(descElement);
    })

    const imagesElement = document.querySelector(".smallPic");
    imagesElement.innerHTML = "";

    bigPic.src = project.images[0];

    project.images.map((image) => {
      // console.log(image);
      const element = document.createElement("img");
      element.src = image;
      element.width = 150;
      imagesElement.append(element);
      element.addEventListener("click", function() {
        bigPic.src = this.src; 
      })
      });
  });
});

const modalClose = document.querySelector("#closeBtn");
modalClose.addEventListener("click", function close(){
  modal.style.transform = "scale(0)"
});