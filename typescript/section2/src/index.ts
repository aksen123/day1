// void = 공허 >> 아무것도 없다는 것을 의미하는 타입

function func1(): string {
  return "hello"
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = 1;
a = "hello";
a = undefined;
a = null


let b: never;
b = 1;
b = "hello";
b = undefined;
b = null