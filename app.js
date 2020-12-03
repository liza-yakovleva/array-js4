
// TODO Завдання 4. Визначити найбільше  найменше число в масиві

let max;
let min;
let arr = [1, 2, 3, 4, 5,123,-45,0,2345];
function searchMax() {
max = arr[0];
for (let i = 1; i < arr.length; i++) { 
  if (arr[i] > max) {
  max = arr[i]
  }
}
  return max;
}
function searchMin() {
  min = arr[0];
  for (let i = 1; i < arr.length; i++) { 
    if (arr[i] < min) {
      min = arr[i]
    }
  }
    return min;
}
searchMax();
searchMin();
console.log(`Максимальне  число в масиві ${max}, мінімальне число в масиві ${min}`);