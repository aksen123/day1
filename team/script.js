const arr = [2,4,6,8,10];
const table1 = document.querySelector(".table1 tr");
const table2 = document.querySelector(".table2 tr");


for(let el of arr) {
  let td = document.createElement("td");
  td.innerText = el;
  table1.appendChild(td);
}



let sum = 0;

for(let i = 0; i <= arr.length; i++) {
  console.log(arr[i])
  let td = document.createElement("td");
  if(i === arr.length) {
    td.innerText = sum;
    td.style.color = "#fff"
    td.style.backgroundColor = "#000"
    table2.appendChild(td);
  } else {
    sum += arr[i];
    td.innerText = arr[i];
    table2.appendChild(td);
  }
}

let result = document.querySelector(".result")
let sum2 = 0;
// let t = "<table border =1><tr>" 
// for(el of arr) {
//   t += `<td>${el}</td>`
//   sum2 += el
//   arr.indexOf(el) === arr.length - 1 ? t += `<td style="color:#fff; background-color:#000">${sum2}</td>` : true
// }
// t += "</tr></table>"

// console.log(t)
// result.innerHTML = t




function showArr(a, b,c) {
  console.log(c)
  let str = "<table><tr>";

  for(let i = 0; i < b.length; i++){
    str += `<td> ${b[i]} </td>`
    c += b[i];
  }
  if(c) {str += `<td style="color:#fff; background-color:#000">${c}</td>`}else {false}
  str += "</tr></table>"
  a.innerHTML = str;

  return a
}

showArr(result, arr)