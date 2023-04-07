$(function() {
  $(".btn1").on({
    "mouseover":function() {
      $(".txt1").css({
        "background-color" : "yellow"
      })
    },
    "mouseout": function() {
      $(".txt1").css({
        "background": "none"
      })
    }
  })
  $(".btn2").hover(function() {
    $(".txt2").css({
      "background-color" :"aqua"
    })
  }, function() {
    $(".txt2").css({
      "background" :"none"
    })
  })
})