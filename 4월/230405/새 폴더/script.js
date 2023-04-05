const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.container');
let lotto = document.querySelector('.pic');

openBtn.addEventListener('click', () => {
  container.style.display = "flex";
  openBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
  container.style.display = "none";
  openBtn.style.display = "block";
});

lotto.addEventListener('click', () => {
  Ma(Math.random() * 45)
})