// // 함수
// let identity = <T>(arg:T): T => {return }

// // 타입 별칭
// type IValuable<T> = {
//   value : T
// }

// // 클래스
// class Valuable<T> {
//   constructor(public value: T) {}
// }

// import { printValue, Valuable } from "./printValuable";
// printValue(new Valuable<number>(1))


// import { mergeObject } from "./mergeObject";

// type INameable = {name: string}
// type IAgeable = {age: number}

// const nameAge: INameable & IAgeable = mergeObject({name: "jack"},{age:32})
// console.log(nameAge)



// import { calcArea } from "./calc";
// import { IReactangle, ICircle, ISquare } from "./IShape";

// const square: ISquare = {tag: "square", size: 10};
// const reactangle: IReactangle = {tag: "reactangle", width: 4, height: 5}
// const circle: ICircle = {tag: "circle", radius: 10}
// console.log(calcArea(square))
// console.log(calcArea(reactangle))
// console.log(calcArea(circle))


import { Bird, Fish } from "./birdAndFish";
import { flyOrswim } from "./FlyOrSwing";

[new Bird, new Fish].forEach(flyOrswim)