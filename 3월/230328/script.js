let tv = new Object() //변수 내용에 객체(object)가 들어가면 참조변수
tv.color = "white";
tv.price = 300000;
tv.info = function() {
  document.write("tv 색상:"+ this.color, "<br />");
  document.write("tv 가격:"+ this.price, "<br />");
}


let car = {
  color: "black",
  price: 5000000,
  info: function() {
  document.write("car 색상:"+ this.color, "<br />");
  document.write("car 가격:"+ this.price, "<br />");
  }
};

document.write("<h1>TV 객체 메서드 호출</h1>");
tv.info();

document.write("<h1>CAR 객체 메서드 호출</h1>");
car.info();

//함수 설정(위) 속성 설정(아래) 두가지 방법있음