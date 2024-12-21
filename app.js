// 1

function getLevel2(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}
console.log(getLevel2(5));

// 2

function createSequence(n, A, B) {
  let sequence = [A, B];

  for (let i = 2; i < n; i++) {
    let nextElement = sequence.reduce((sum, num) => sum + num, 0);
    sequence.push(nextElement);
  }

  return sequence;
}

let result = createSequence(5, 2, 3);
console.log(result);

//3

function reverseArray(array) {
  return array.reverse();
}

let inputArray = [1, 2, 3, 4, 5];

let reversedArray = reverseArray(inputArray);
console.log(reversedArray);

// 4

function massiv(array) {
  let oddElements = [];
  let oddCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddElements.push(array[i]);
      oddCount++;
    }
  }

  console.log("Toq elementlar:", oddElements.join(" "));
  console.log("Toqlar soni =", oddCount);
}

let array = [4, 5, 7, 8, 6, 9];

massiv(array);

//5
function processArray(array) {
  let even = array.filter((x) => x % 2 === 0);
  let odd = array.filter((x) => x % 2 !== 0).reverse();
  console.log([...even, ...odd].join(" "));
}

processArray([4, 5, 7, 8, 6, 9]);

// 6

function indexElement(array) {
  let result = array.filter((_, index) => index % 2 === 0);
  console.log(result.join(" "));
}

indexElement([1, 2, 3, 4, 5, 6]);

// 7
function extractElements(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    result.push(arr[i]);
  }
  return result.reverse();
}

let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(extractElements(A));

// 8

function element(arr) {
  let evenIndices = [];
  let oddIndices = [];

  for (let i = 0; i < arr.length; i++) {
    (i % 2 === 0 ? evenIndices : oddIndices).push(arr[i]);
  }

  return evenIndices.concat(oddIndices);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(element(a));

// 9

function elements(arr) {
  let oddIndices = [];
  let evenIndices = [];

  for (let i = 1; i < arr.length; i += 2) {
    oddIndices.push(arr[i]);
  }

  for (let i = arr.length - 2; i >= 0; i -= 2) {
    evenIndices.push(arr[i]);
  }

  return oddIndices.concat(evenIndices);
}

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(elements(n));

// 10

function b(arr) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
    result.push(arr[left++]);
    if (left <= right) {
      result.push(arr[right--]);
    }
  }

  return result;
}

let B = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b(B));

// 11

function rangeOutSum(arr, K, L) {
  let sum = 0;

  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }

  for (let i = L + 1; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let K = 2;
let L = 5;
console.log(rangeOutSum(arr, K, L));

// 12

function truthyOrFalsy(arr) {
  let truthy = [];
  let falsy = [];

  arr.forEach((item) => {
    if (item) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  });

  return { truthy, falsy };
}

let input = [10, false, "", "Abdulaziz", null];
let result1 = truthyOrFalsyFalsy(input);
console.log("Truthy:", result1.truthy);
console.log("Falsy:", result1.falsy);

// 13

function getOddMin(arr1) {
  let min = Infinity;

  for (let i = 0; i < arr1.length; i += 2) {
    if (arr1[i] < min) {
      min = arr1[i];
    }
  }

  return min;
}

let arr1 = [10, 5, 3, 7, 1, 9, 4];
console.log(getOddMin(arr1));

// 14
function getEvenMax(arr2) {
  let max = -Infinity;
  for (let i = 1; i < arr2.length; i += 2) {
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }

  return max;
}

let arr2 = [10, 5, 3, 7, 1, 9, 4];
console.log(getEvenMax(arr2));
