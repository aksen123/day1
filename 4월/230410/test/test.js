$(function() {
  $(".btn1").on("click", function(e) {
    e.preventDefault()
    $(".txt1").css({"background-color" : "#ff0"})
  })

  $(".btn2").on("click", function() {
    $(".txt2").css({"background-color" : "#0ff"});
  });

  $(".btn3").on("dblclick", function() {
    $(".txt3").css({"background-color" : "green"})
  });

  let fontSize = 14;
  $(".zoomBtn button").on("click", zoomInOut);
  function zoomInOut() {
    if($(this).hasClass("zoomOut")) {
        if(fontSize <= 8) return false;
        fontSize--;
    } else if($(this).hasClass("zoomIn")) {
        if(fontSize >= 20) return false;
        fontSize++;
    } else {
      fontSize = 14;
    }
  }

  $(".font").text(fontSize + "px")
  $("body").css({fontSize : `${fontSize}px`})
})