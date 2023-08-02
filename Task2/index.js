/*
Task 2:
Data Manipulation
Write a function in Node.js that takes 
an array of integers as input and returns 
the sum of all the numbers.
*/

function sumArray(arr) {
    // checking whether the passed array is an actually array or not
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const arr = [1,5,7,9,3];
const answer = sumArray(arr)
console.log(answer);
