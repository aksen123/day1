let result = [];


for(let i = 0; i < 6; i++) {
  let num = Math.ceil(Math.random() * 45);
  if(result.indexOf(num) == -1) {
    result.push(num);
  }
}
document.write(result.sort())