// import { join } from "path";

// console.log(
//   join(["h","e","l","l","o"]),
//   join(["h","e","l","l","o"],"_")
// )

// const numbers: number[] = [1,2,3,4,5];
// for(let i = 0; i < numbers.length; i++){
//   const item: number = numbers[i];
//   console.log(item);
// }


// let names: string[] = ["Jack", "Jane", "Steve"];
// for(let index in names) {
//   const name = names[index];
//   console.log(`[${index}] : ${name}`)
// }

// for(let name of ["Jack", "Jane", "Steve"]) {
//   console.log(name)
// }

// import { arrayLength, isEmpty } from "./test";
// let numArray: number[] = [1,2,3];
// let strArray: string[] = ["hello", "World"];

// type Iperson = {
//   name: string;
//   age?: number
// }

// let personArray: Iperson[] = [
//   {name: "Jack"},
//   {name: "Jane", age: 32}
// ]

// console.log(
//   arrayLength(numArray),
//   arrayLength(strArray),
//   arrayLength(personArray),
//   isEmpty([]),
//   isEmpty([1])
// )

// const identity = <T>(n: T): T => n;

// console.log(
//   identity<boolean>(true)
// )

// import { range } from "./range";

// let numbers: number[] = range(1, 10);

// console.log(numbers)

// const multiply = (result: number, val: number) => result * val;

// let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
// let tempResult = numbers.filter(val => val % 2 !== 0).map(val => val * val).reduce(multiply, 1);

// let result = Math.round(Math.sqrt(tempResult));

// console.log(result);

import { range } from "./range";

// const array: number[] = range(1, 10 + 1);
// const half = array.length / 2;



// let odds: number[] = array.filter(value => value % 2 !== 0);
// let evens: number[] = array.filter(value => value % 2 === 0);

// let belowHalf: number[] = array.filter((value,i) => i < half);
// let overHalf: number[] = array.filter((value, i) => i >= half);

// console.log(belowHalf, overHalf);

// let squres: number[] = range(1, 5 + 1).map((val: number) => val * val);

// console.log(squres)


// let names: string[] = range(1, 5 + 1).map((val, idx) => `[${idx}] : ${val}`);

// console.log(names)

// let reduceSum: number = range(1, 100 + 1).reduce((result: number, val: number)=>result + val, 0);

// console.log(reduceSum)

// let reduceSum2: number = range(1, 10 + 1)
//   .reduce((result: number, val: number) => result * val, 1);
//   console.log(reduceSum2)

// function impure1(array: readonly number[]):void {
//   array.push(1);
//   array.splice(0,1)
// }


// deep-copy >>>> 깊은복사
// let original = 1;
// let copied = original;

// copied += 2;

// console.log(original, copied) // 1, 3 

// //shallow-copy >> 얕은복사

// const originalArray = [5, 3, 9, 7];
// const shallowCopiedArray = originalArray;

// shallowCopiedArray[0] = 0

// console.log(originalArray, shallowCopiedArray) // 둘다 [0 , 3, 9, 7]

// const oArray = [1,2,3,4,5];
// const deepCopiedArray = [...oArray];
// deepCopiedArray[0] = 0;

// console.log(oArray, deepCopiedArray) // [ 1, 2, 3, 4, 5 ] [ 0, 2, 3, 4, 5 ]



import { doSomething } from "./sort_test";

const [result, errorMessage] = doSomething();

console.log(result, errorMessage)