'use strict';

let arrayOfNum = [1, 2, 3, 4, 6];
let arrayOfWords = ['kahled', 'sameer', 'insan', 'mohammad'];

function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log('arrayOfNum before applying reverse function = ', arrayOfNum);
console.log('arrayOfNum after applying reverse function = ', reverseArray(arrayOfNum));
console.log('arrayOfWords before applying reverse function = ', arrayOfWords);
console.log('arrayOfWords after applying reverse function = ', reverseArray(arrayOfWords));
