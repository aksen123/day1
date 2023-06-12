// export const createRangeIterable = (from: number, to: number) => {
//   let currentvalue = from;
//   return {
//     next() {
//       const value = currentvalue < to ? currentvalue++ : undefined;
//       const done = value == undefined;
//       return {value, done}
//     }
//   }
// }

// 위 함수를 클래스로 바꿔준것 
// export class createRangeIterable {
//   constructor(public from: number, public to: number) {}
//   [Symbol.iterator]() {
//     const that = this;  // 전역변수로 this를 담은 that을 만들어줘서 next()안에 to한테 this를 담은 that을 넣어줌
//     let currentvalue = this.from;
//     return {
//       next() {
//         const value = currentvalue < that.to ? currentvalue++ : undefined;
//         const done = value == undefined;
//         return {value, done}
//       }
//     }
//   }
// }


// export class createRangeIterable implements Iterable<string> {
//   constructor(private strings: string[] = [], private currentIndex: number = 0) {}
//   [Symbol.iterator](): Iterator<string> {
//     const that = this; 
//     let currentvalue = that.currentIndex;
//     let length = that.strings.length;

//     const iterator: Iterator<string> = {
//       next(): {value: string, done: boolean} {
//         const value = currentvalue < length ? that.strings[currentvalue++] : undefined;
//         const done = value == undefined;
//         return {value, done}
//       }
//     }
//     return iterator
//   }
// }


// export class stringIterable implements Iterable<string> {
//   constructor(private strings: string[] = [], private currentIndex: number = 0) {}

//   [Symbol.iterator](): Iterator<string> {
//     const that = this;
//     let currentIndex = that.currentIndex;
//     let length = that.strings.length;
    
//     const iterator: Iterator<string> = {
//       next() {
//         v
//       }
//     }
//   }
//   return
// }


export const test1 = async() => {
  let value = await 1;
  console.log(value);

  value = await Promise.resolve(1)
  console.log(value)
}