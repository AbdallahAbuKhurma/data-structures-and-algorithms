'use strict';

let arrayOfNum = [11, 22, 33, 44, 55, 66, 77];

function binarySearch(arr, value) {

  let startPoint = 0;
  let endpoint = arr.length - 1;

  while (startPoint <= endpoint) {
    const middle = Math.floor((startPoint + endpoint) / 2);

    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      startPoint = middle + 1;
    } else {
      endpoint = middle - 1;
    }
  }
  return -1;
}
console.log('================');
console.log('Before the function', arrayOfNum);
console.log('After the function', binarySearch(arrayOfNum, 90));
console.log('================');

console.log('trying a number from the arrayOfNum');

console.log('================');
console.log('Before the function', arrayOfNum);
console.log('After the function', binarySearch(arrayOfNum, 66));
console.log('================');
