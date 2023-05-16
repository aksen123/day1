// 사용자로 부터 받은 문자열에 A,a가 있다면 #로 변환해서 출력 

let str = String(prompt("대소문자를 섞어서 입력해주세요"));

function solution(e) {
  let result = "";
  for(let el of e) {
    el === "a" || el === "A" ? result += "#" :  result += el
  }

  return console.log(result)
}

solution(str);



function solution2(e) {
  let answer = e;
  answer = answer.replace(/A/gi, "#");
  // answer = answer.replace(/a/g, "#");
  return answer;
}

console.log(solution2(str))