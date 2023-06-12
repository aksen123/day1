// export function* generator() {
//   console.log(`generator started...`);
//   let value = 1;
//   while(value < 4) {
//     yield value++;
//   }
//   console.log(`generator finished...`)
// }

// export function* rangeGenerator(from: number, to: number) {
//   let value = from;
//   while(value < to) {
//     yield value++;
//   }
// }

function* gen12() {
  yield 1;
  yield 2;
}

export function* gen12345() {
  yield* gen12();

}