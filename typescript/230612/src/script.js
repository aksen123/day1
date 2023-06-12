
// function* train() {
//   yield "판교";
//   yield "이매";
//   yield "삼동";
//   yield "1";
//   yield "2";
//   yield "3";
//   yield "4";
//   yield "5";
//   yield "6";
//   yield "7";
//   yield "8";
//   yield "9";
// }

import { rejects } from "assert";
import { resolve } from "path";

// let line = train();

// document.querySelector("button").addEventListener("click", () => {
//   let current = line.next();
//   if(current.done !== true) {
//     document.querySelector("#result").innerHTML = current.value; 
//   } else {
//     document.querySelector("#result").innerHTML = "종점입니다";
//     // document.querySelector("button").disabled = true;
//     document.querySelector("button").setAttribute("disabled",true)
//   }
// })


// function displayA() {
//   console.log("A");
// }
// function displayB(callback) {
//   setTimeout(()=>{
//     console.log("B")
//     callback();
//   },2000)
// }
// function displayC() {
//   console.log("C")
// }

// displayA();
// displayB(displayC)



// function disiplayLetter() {
//   console.log("A");
//   setTimeout(()=>{
//     console.log("B");
//     setTimeout(()=>{
//       console.log("C")
//       setTimeout(() => {
//         console.log("D")
//         setTimeout(()=>{
//           console.log("STOP")
//         },1000)
//       }, 1000);
//     },1000)
//   },1000)
// }

// disiplayLetter()

const pizza = new Promise((resolve, reject) => {
  if(true) {
    resolve(`피자를 주문합니다`)
  }else {
    reject(`피자를 주문하지 않았습니다.`)
  }
})

pizza
.then(
  result => console.log(result)
)
.catch(
  err =>console.log(err)
)