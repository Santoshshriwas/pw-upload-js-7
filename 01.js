function doubleElements(arr, callback) {
  const doubledArr = [];
  for (const element of arr) {
    doubledArr.push(callback(element));
  }
  return doubledArr;
}
const myArr = [1, 2, 3, 4];
const doubleCallback = (num) => num * 2;
const doubledArr = doubleElements(myArr, doubleCallback);
console.log(doubledArr); // Output: [2, 4, 6, 8, 10]