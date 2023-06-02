// TS 에서 foreach문 만들기

function forEach<T> (arr: T[], callback: (item :T) => void) {
  for(let i = 0; 1 < arr.length; i++){
    callback(arr[i]);
  }
}