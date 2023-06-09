let hi = () => "안녕하세요" // 화살표함수

console.log(hi()) // 안녕하세요


let hi2 = user => `${user}님 안녕하세요`; // 매개변수가 1개일때 소괄호 생략 가능 함

console.log(hi2("만두")); //만두님 안녕하세요

let sum = (a,b) => a+ b // 매개변수가 2개일때 
