const info = document.querySelectorAll(".city");
const toggle = document.querySelectorAll(".view ");

const a = document.querySelector(".a");
const b = document.querySelector(".b");

// toggle.forEach((el) => {
//   el.classList.remove("on");
//   el.addEventListener("click", function(e) {
//     let next = el.nextSibling;
//     console.log(next);
//     console.log(e.currentTarget);
//     console.log(e.target);
//     console.log(toggle);
//     // el.classList.toggle("on");
//     info.forEach((el) => {
//       el.classList.remove("on");
//     })
//     next.classList.toggle("on");
//     el.classList.toggle("on")
//   })
// })


const accordianBtn = document.querySelectorAll(".title");
const accIcon = document.querySelectorAll(".icon");
const allText = document.querySelectorAll(".text");


accordianBtn.forEach((el) =>{
  el.addEventListener("click", toggleAccordian)
})


function toggleAccordian(el) {
  let targetAccIcon = el.currentTarget.children[0];
  let targetText = el.currentTarget.nextElementSibling.classList;

  if(targetText.contains('show')) {
    targetText.remove("show");
    targetAccIcon.classList.remove("anime")
  }else {
    accordianBtn.forEach(el => {

      allText.forEach((el) => {
        el.classList.remove("show")
      })
      accIcon.forEach((el) => {
        el.classList.remove("anime")
      })
    })
    targetText.add('show');
    targetAccIcon.classList.add("anime");
  };
  console.log(targetText);
};