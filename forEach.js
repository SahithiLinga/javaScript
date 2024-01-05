function forEachFun(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
}
let numbers = [1, 2, 3, 4];
forEachFun(numbers, (num) => {
    let doubled = num * 2;
    console.log(doubled);
  });
