const startWord = () => {
  let myword = document.querySelector("#myword").value;
  let word = document.querySelector("#word").innerText;
  
  let lastword = word[word.length - 1]
  let firstwrod = myword[0];

  if(lastword === firstwrod) {
    document.querySelector("#result").innerText = "정답입니다";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
    
  }else {
    document.querySelector("#result").innerText = "틀렸습니다";
    document.querySelector("#myword").value = "";
  }
}


//  lotto
const lottoBtn = document.querySelector(".wrapper_lotto_btn");
const gameNum = document.querySelector(".game_lotto_number");

lottoBtn.addEventListener("click", ()=> {
  gameNum.textContent ="";
  let luckyArr = [...Array(45).keys()].map(el => el+1)
  let result = []
  for(let i = 0; i < 6; i++){
    let idx = Math.floor(Math.random() * luckyArr.length);
    let luckNum = luckyArr[idx];
    result.push(luckNum)
    // luckyArr[idx] = undefined;
    luckyArr = luckyArr.filter(el => el !== luckyArr[idx]);
    console.log(luckyArr)
  }

  result.sort((a, b) => a - b)
  for(let el of result) {
    const span = document.createElement('span');
    span.innerText = el;
    gameNum.appendChild(span);
  }
});
