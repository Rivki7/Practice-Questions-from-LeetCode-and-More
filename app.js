// Link to question: https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function plusMinus(arr) {
  if (!arr || arr.length == 0) return;
  const count = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count[0]++;
    } else if (arr[i] < 0) {
      count[1]++;
    } else {
      count[2]++;
    }
  }
  let countAllNums = arr.length;

  console.log((count[0] / countAllNums).toFixed(6));
  console.log((count[1] / countAllNums).toFixed(6));
  console.log((count[2] / countAllNums).toFixed(6));
}
//plusMinus([-4, 3, -9, 0, 4, 1]);

// Link to question: https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
function miniMaxSum(arr) {
  let sum = arr[0],
    min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  let minimumSum = sum - max;
  let maximumSum = sum - min;
  console.log(minimumSum, maximumSum);
}

//miniMaxSum([1, 3, 5, 7, 9]);

function fizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('FizzBuzz');
    } else if (n % 3 === 0) {
      console.log('Fizz');
    } else if (n % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

function findMedian(arr) {
  const sortedArr = arr.toSorted((a, b) => a - b);
  const medianPlace = Math.floor(arr.length / 2);

  return sortedArr[medianPlace];
}

console.log(findMedian([5, 6, 9, 3, 2]));
