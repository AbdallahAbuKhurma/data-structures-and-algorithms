'use strict';

let arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'j'];

function insertShiftArray(arr, val) {
  const mid = Math.ceil(arr.length / 2);
  let newArray = [];
  let endpoint = arr.length;

  for (let i = 0; i < mid; i++) {
    newArray[i] = arr[i];
  }

  for (let i = mid; i < endpoint; i++) {
    newArray[i + 1] = arr[i];
  }
  newArray[mid] = val;
  return newArray;
}

console.log('==================');
console.log('Before function', arrayOfNum);
console.log('after function', insertShiftArray(arrayOfNum, 9));
console.log('==================');


console.log('==================');
console.log('Before function', arrayOfLetters);
console.log('after function', insertShiftArray(arrayOfLetters, 'z'));
console.log('==================');
