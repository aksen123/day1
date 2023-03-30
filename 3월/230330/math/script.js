let buttons = document.querySelectorAll('button');
let computerChoice = document.querySelector('.computer-choice');
let userChoice = document.querySelector('.your-choice');
let winner = document.querySelector('.result')
let result = ['가위', '바위', '보'];

const show = (user, computer, result) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
}

const game = (user, computer) => {
  if(user === computer) {
    messege = '무승부!';
  } else {
    switch(user + computer) {
      case '가위보'  :
      case '바위가위' :
      case '보바위' :
        messege = '사용자 승리!';
        break;
      case '가위바위' :
      case '바위보' :
      case '보가위' :
        messege = '컴퓨터 승리!';
        break;
    };
  };
  show(user, computer, messege);  //지역함수
};

const play = (event) => { 
  let user = event.target.innerText; 
  //이벤트가 일어난 타겟안에 텍스트를 user변수에 넣어줌
  let randomIndex = Math.floor(Math.random() * 3);
  // 0~2 까지 숫자만 나옴 (result의 인덱스가 0,1,2라서 이렇게 나오게 뽑는다)
  let computer = result[randomIndex];
  game(user, computer);
  console.log(user, computer);

};

buttons.forEach((buttons) => {
  buttons.addEventListener('click', play);
});
