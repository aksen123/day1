

let str = "btn_out.jpg"



let eat = ["햄버거", "칼국수", "김찌", "파스타", "돈까스"];
let ranNum = Math.floor(Math.random() * eat.length)

// document.write(`<h1>점심 메뉴 : ${eat[ranNum]} </h1>`);

function lunch() {
  let num =prompt("전화번호 입력", "");
document.write(`<h1>전화 번호 : ${num.substring(0,num.length-4)} **** </h1> <br />`);

  document.write(`<h1> btn_out.jpg = > ${str.replace("ut","ver")} </h1> <br />`);

  document.write(`<h1>점심 메뉴 : ${eat[ranNum]} </h1>`);

}