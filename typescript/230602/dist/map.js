function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
const arr = [1, 2, 3];
console.log(map(arr, (item) => item.toString()));
export {};
