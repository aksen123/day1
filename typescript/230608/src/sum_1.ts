import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";
import { map } from "./map";


let numbers: number[] = range(1, 100 + 1);
console.log(numbers);


let result = fold(
  map(numbers, value => value * value), (result, value) => result + value, 0 );

console.log(result);
