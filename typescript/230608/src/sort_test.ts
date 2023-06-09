// import { pureSort } from "./sort";

// let beforeSort = [6, 2, 9, 0];
// const aftersort = pureSort(beforeSort);

// console.log(beforeSort,aftersort);

// import { pureDelete } from "./sort";

// const mixedArray: object[] = [
//   [], 
//   {name: "jack"}, 
//   {name: "jane", age: 32},
//   ["description"]
// ]
// const objectsOnly: object[] = pureDelete(mixedArray, (val)=>Array.isArray(val))

// console.log(mixedArray, objectsOnly)

import { ResultType } from "./sort";
export const doSomething = (): ResultType => {
  try {
    throw new Error("Some err occurs..")
  } catch(e: any) {
    return [false, e.message]
  }
}