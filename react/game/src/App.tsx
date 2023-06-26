import React from 'react';
import './App.css';
import Box from './Components/Box';
import { useState } from 'react';

const choice = {
  rock: {
    name: 'rock',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg'
  },
  scissor: {
    name: 'scissor',
    img: 'https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png'
  },
  paper: {
    name: 'paper',
    img: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg'
  },
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [ComputerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const play = (userChoice: any) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
  }
  const judgement = (user, computer): any => {
    console.log(user, computer);
    if(user.name === computer.name){
      return "tie"
    } else if(user.name === 'rock') return computer.name === 'scissor' ? 'win' : 'lose'
      else if(user.name === 'scissor') return computer.name === 'paper' ? 'win' : 'lose'
      else if(user.name === 'paper') return computer.name === 'rock' ? 'win' : 'lose'
      
  }
  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    // console.log(itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    // console.log(randomItem)
    let final = itemArray[randomItem];

    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <Box title = 'You' item={userSelect} result={result}/>
        <Box title = 'Computer'  item={ComputerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={()=>play('scissor')}>가위</button>
        <button onClick={()=>play('rock')}>바위</button>
        <button onClick={()=>play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
