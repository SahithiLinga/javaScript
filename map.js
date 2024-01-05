function mapFun(numbers, callback) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
      result.push(callback(numbers[i]));
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];

  
const mappedValues = mapFun(numbers, (num) => num + 10);
console.log("Mapfun:", mappedValues);


//map doesn't change original array and returns a new array according to conditions