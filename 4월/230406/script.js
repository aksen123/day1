$(document).ready(function(){
  $(".slider").bxSlider({
    mode:"horizontal",
    speed: 300,
    auto: true, //자동 넘김
    pause: 3000, //자동넘김 시간
    moveSlide: 1,//슬라이더 갯수
    autoHover: true, //마우스 올리면 정지
    autoControls: true, // 플레이버튼
    pager: false //아래에 점
  });
});