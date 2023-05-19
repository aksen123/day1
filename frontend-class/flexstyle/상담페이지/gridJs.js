// const btn = document.querySelector("button i")

// btn.addEventListener("click", ()=> {
//   if(btn.classList.value === "fas fa-xmark") {
//     btn.classList.value = "fas fa-bars";
//     document.querySelector("nav").style ="display:none";
//     document.querySelector(".sns").style ="display:none";
//     document.querySelector("header").style = "height:70px"
//   } else {
//     btn.classList.value = "fas fa-xmark";
//     document.querySelector("nav").style ="display:block"
//     document.querySelector(".sns").style ="display:block"
//     document.querySelector("header").style = "height: auto"
//   }

// })

function sideMenu() {
  const side_menu = document.querySelector(".trigger");
  const gnb = document.querySelector("nav ul");
  const sns = document.querySelector(".sns");

  side_menu.classList.toggle("active");
  gnb.classList.toggle("on")
  sns.classList.toggle("on")
}