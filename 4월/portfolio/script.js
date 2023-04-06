let result = [];


let num = Math.ceil(Math.random() * 45);
for(let i = 0; i < 6; i++) {
  if(result.indexOf(num) == -1) {
    result.push(num);
  }
}
