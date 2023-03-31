$(function() {
    // Slider
    $('.photo-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });

    // Sub Menu
    $('.top-menu').click(function() {
        $('.sub-menu').toggleClass('on');
      });
      $('section, .menu a').click(function() {
        $('.sub-menu').removeClass('on');
      });
});

let now = new Date();
let fristDay = new Date("2023/02/28");

let toNow = now.getTime();
let toFrist = fristDay.getTime();

let passedTime = toNow - toFrist;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

document.querySelector('#accent').innerText ="Strat+" + passedDay + "일";
// `D+

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
  const now = new Date();

  hour.innerText = now.getHours() + "시";
  min.innerText = now.getMinutes() + "분";
  sec.innerText = now.getSeconds() + "초";
};

setInterval(clock, 1000);
