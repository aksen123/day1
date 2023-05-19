// 배열안 문자열중 길이가 가장긴 문자열 출력하기

const arr = ["teacher", "time", "student", "beautiful", "good"];

function solution(arr) {
  let first = arr[0];

  arr.forEach(el => {
    el.length > first.length ? first = el : false
  })

  return first
}

console.log(solution(arr))