let img = document.querySelectorAll(".img_wrap");

img.forEach(el => {
  el.addEventListener("mouseover", function() {
    let div = document.createElement("div");
    div.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi possimus aut magnam officia itaque tempore ullam repellendus. Eligendi a adipisci molestias iste eius corrupti"

    div.className = "box"
    this.appendChild(div)
  })
});

img.forEach(el => {
  el.addEventListener("mouseleave", function() {
    let box = document.querySelector(`.img_wrap .box`);
    this.children[2].innerHTML = ""
  })
})