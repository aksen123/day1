interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;
}

const person: Person = {
  name: "홍길동",
  // age : 20
  sayHi: () => {}
}



interface Animal {
  name: string;
  age: number
}
interface Dog extends Animal {
  isBark: boolean
}
const dog: Dog = {
  name: "뽀삐",
  age: 10,
  isBark: true
}

interface Cat extends Animal{
  isScratch: boolean
}
interface Chicken extends Animal{
  isFly: boolean;
}

interface PerSon1  {
  name: string;
}
interface PerSon1  {
  age: number;
}

const person1: PerSon1 = {
  name: "홍길동",
  age:20
}

console.log(person1)