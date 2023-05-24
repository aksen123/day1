// 배열 객체에서 중복된 단어를 제거 해 콘솔창에 출력

const arr = ["good", "time", "good", "time", "student"];


function solution(e) {
  let answer = '';
  answer = e.filter((v, i) => {
    return e.indexOf(v) === i
  })
  return answer
}
console.log(solution(arr));


