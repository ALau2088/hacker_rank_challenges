// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//   inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//   inputString = inputString
//     .replace(/\s*$/, '')
//     .split('\n')
//     .map(str => str.replace(/\s*$/, ''));

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// Complete the whatFlavors function below.
const quickSort = function(arr, low, high) {
  if (low < high) {
    let mid = partition(arr, low, high);
    quickSort(arr, low, mid);
    quickSort(arr, mid + 1, high);
    // console.log(low, high);
  }
  return arr;
};

const partition = function(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high + 1;
  while (i < j) {
    do {
      i++;
    } while (arr[i] < pivot && i < high);
    do {
      j--;
    } while (arr[j] >= pivot && j > low);
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  arr[low] = arr[j];
  arr[j] = pivot;
  return j;
};

function whatFlavors(cost, money) {
  let flavor1, flavor2;
  let maxSum = 0;
  let sortedCost = quickSort(cost.slice(0), 0, cost.length - 1);
  let i = 1;
  while (i < sortedCost.length) {
    let sum = sortedCost[i] + sortedCost[i - 1];
    if (sum > money) {
      break;
    }
    if (sum > maxSum) {
      maxSum = sum;
      flavor1 = sortedCost[i - 1];
      flavor2 = sortedCost[i];
    }
    i++;
  }

  console.log(flavor1, flavor2);
  let index1,
    index2,
    flavor1Found = false;
  for (let i = 0; i < cost.length; i++) {
    if (cost[i] === flavor1 && flavor1Found === false) {
      index1 = i + 1;
      cost[i] = null;
      flavor1Found = true;
    }
    console.log(cost);
    if (cost[i] === flavor2) {
      console.log('line 85', i);
      index2 = i + 1;
      cost[i] = null;
    }
  }
  process.stdout.write(`${index1} ${index2}`);
}

// function main() {
//   const t = parseInt(readLine(), 10);

//   for (let tItr = 0; tItr < t; tItr++) {
//     const money = parseInt(readLine(), 10);

//     const n = parseInt(readLine(), 10);

//     const cost = readLine()
//       .split(' ')
//       .map(costTemp => parseInt(costTemp, 10));

//     whatFlavors(cost, money);
//   }
// }
// whatFlavors([1, 4, 5, 3, 2], 4);
whatFlavors([2, 2, 4, 3], 4);
