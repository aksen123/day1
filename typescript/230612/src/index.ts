// 이터러블, 이러테이터 객체 제너레이터 함수 사용
// import { createRangeIterable } from "./test";
// const iterator = new createRangeIterable(1, 3 + 1);
// for(let val of iterator) {
//   console.log(val)
// }

// while(true) {
//   const {value, done} = iterator.next();
//   console.log(value);
//   if(done) break;
// }




// import { range } from "./range";
// for(let val of range(1, 3 + 1)) {
//   console.log(val)
// }



// import { createRangeIterable } from "./test";
// for(let val of new createRangeIterable(["hello","world", "!"])) {
//   console.log(val)
// }



// import { generator } from "./generator";
// for(let val of generator()) {
//   console.log(val)
// }


// let count = 0;
// console.log(`program started...`);
// const id = setInterval(()=>{
//   if(count >= 3) {
//     console.log(`program finished...`);
//     clearInterval(id);
//   }else {
//     console.log(count++)
//   }
// }, 1000)


// import { rangeGenerator } from "./generator";
// let iterator = rangeGenerator(1, 3 + 1);
// while(true) {
//   const {value, done} = iterator.next();
//   console.log(value);
//   if(done) break;
// }

// for(let val of rangeGenerator(4, 6 + 1)){
//   console.log(val)
// }

// import { gen12345 } from "./generator";
// for(let val of gen12345()) {
//   console.log(val)
// }



// // fs = file system >> node.js의 운영체제 시스템 파일이 모여있는곳
// // Buffer >> node.js가 제공하는 클래스 중 하나 (컴퓨터가 프로그래밍 작업을 수행하기 위한 바이너리 데이터 = 0 ,1을 저장하는 기능)
// // readFileSync >> node.js 에서 특정파일을 읽고 난 후 Buffer라는 타입으로 데이터를 전달 해주는 역할 / 동기타입으로 데이터를 전달해주는 함수
// // 비동기 타입으로 데이터를 전달해주는 함수 >> readfile
// import { readFileSync } from "fs";
// const buffer: Buffer = readFileSync("./package.json"); // 패키지제이슨을 0,1데이터로 변수에담아줌
// const content: string = buffer.toString();//0,1들이 담긴 변수를 문자열로 변환
// console.log(content)



// import { readFile } from "fs";
// readFile("./package.json", (err: Error, buffer: Buffer)=>{ 
//   if(err) throw err //에러가 났을때
//   else {
//     const content: string = buffer.toString(); // 정상적으로 들어왔을때
//     console.log(content)
//   }
// })


// import { readFilePromise } from "./readFilePromise";

// readFilePromise("./package.json")
// .then((content: string) => {
//     console.log(content);
//     return readFilePromise("./tsconfig.json")
//   })
//   .then((content: string)=>{
//     console.log(content);
//     return readFilePromise(".")
//   })
//   .catch((err:Error) => console.log(`error: `, err.message))
//   .finally(() => console.log("프로그램 종료!"))


  // Promise.resolve(1)
  // .then((val)=> console.log(val))

  // Promise.resolve("hi")
  // .then((val)=> console.log(val))

  // Promise.resolve([1,2,3])
  // .then((val)=> console.log(val))

  // Promise.resolve({name: "Jack", age:32})
  // .then((val)=> console.log(val))

  // Promise.reject(new Error(`에러 발생`))
  // .catch((err: Error) => console.log(`error: `, err.message))


  // Promise.resolve(1)
  // .then((val: number) => {
  //   console.log(val);
  //   return Promise.resolve(true)
  // })
  // .then((val: boolean) => {
  //   console.log(val);
  //   return Promise.resolve([1,2,3])
  // })
  // .then((val: number[]) => {
  //   console.log(val);
  //   return {name: "Jack", age: 32}
  // })
  // .then((val: {name: string, age: number}) =>{
  //   console.log(val)
  // })


// const getAllResolveResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

// getAllResolveResult<any>([Promise.resolve(true), Promise.resolve("hello")])
//   .then(result => console.log(result))

  
// getAllResolveResult<any>([Promise.reject(new Error(`error`)), Promise.resolve(1)])
// .then(result => console.log(result)) 
// .catch(error => console.log(`error: `, error.message))
// // 배열에 담긴 Promise객체중 거절(reject)객체가 발생하면 resolve값은 생략하고 reject객체 값만 반환

// const test = async() => {
//   const value = await Promise.resolve(1)
//   console.log(value)
// }

// test()



// import { test1 } from "./test";
// import { test2 } from "./test1";

// test1()
// .then(()=> test2())



const asyncException = async() => {
  throw new Error('error!!!!!')
}

asyncException()
.catch(err => console.log(`error:`, err.message))