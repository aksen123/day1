const raffle = document.querySelector("#raffle");
const clear = document.querySelector("#clear");


raffle.addEventListener("click", (e) => {
  e.preventDefault()
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");
  let winner = '';
  for(let i = 0; i < total.value; i++) {
    let picked = Math.ceil(Math.random() * seed.value);
    winner.includes(picked) ? i-- : (i === total.value - 1) ?  winner += `${picked}번` : winner += `${picked}번,`    
  }
  result.innerText = `당첨자 ${winner}`

});

