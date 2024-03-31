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

// console.log(findMedian([5, 6, 9, 3, 2]));

//Link to problem: https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
//Ways to solve:
//1. With map
//2.with array sort

const majorityElement = function (nums) {
  const sortedNums = [...nums].sort();
  const majorityElementLocation = Math.floor(sortedNums.length / 2);

  return sortedNums[majorityElementLocation];
};
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
/*
//Time complexity:
Sorting the array: The time complexity of the sorting algorithm used in JavaScript is typically O(n log n), where n is the length of the array.
Finding the majority element: After sorting the array, accessing the element at the middle index (Math.floor(nums.length / 2)) takes O(1) time.
Overall, the time complexity of the code is dominated by the sorting step, so it's O(n log n)

//Space complexity:
The space complexity is determined by the additional space required to store the sorted copy of the array. Creating a shallow copy of the array ([...nums]) and sorting it requires O(n) additional space.
Other than that, the space used for storing the index of the majority element and other variables is constant.
Hence, the space complexity remains O(n).
*/

// link to the problem: https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
/*
Ways to solve: 
1. loop over the array k - with pop and unshift in each iteration
2. with splice and reverse
*/
const arr = [-1, -100, 3, 99];

//Too long, with checking wether k is bigger that the array length.
var rotate3 = function (nums, k) {
  k %= nums.length;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};
// console.log(arr);
// rotate(arr, 2);
// console.log(arr);
/*
Time complexity: 
O(n^2) or O(n*k)

Space complexity: 
O(1)
*/

function rotate2(nums, k) {
  k %= nums.length;
  if (k === 0) return;
  const tempNums = nums.splice(0, nums.length - k);
  nums.push(...tempNums);
}

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr2);
// rotate2(arr2, 3);
// console.log(arr2);

/*
Time complexity: O(n) 
Space complexity: O(1)
*/

//******************************************
//link to the problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
const maxProfit = function (prices) {
  let maxPro = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxPro) maxPro = prices[j] - prices[i];
    }
  }
  return maxPro;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
/*
Time Complexity: O(n^2)
The time complexity can be expressed as O(n^2), where n is the number of elements in the prices array. This is because there are two nested loops, each iterating through the array of prices.

Space Complexity:  O(1)
The code only uses a fixed amount of extra space for variables (maxPro, i, j), and it does not depend on the size of the input array.
*/

//Better solution- better time complexity
const maxProfit2 = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};

// console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit2([7, 6, 4, 3, 1]));

/*
Time Complexity: O(n)
The time complexity of this code is O(n), where n is the number of elements in the prices array. It's linear because it scales linearly with the size of the input.

Space Complexity: O(1)
It only uses a fixed amount of extra space to store variables (minPrice, maxProfit, and the loop counter i). The space used does not increase with the size of the input array.
*/

// ******************************************************
//Link to the problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
const maxProfitMedium = function (prices) {
  let sumProfit = 0;
  let current = 0;
  let biggest = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] && prices[i + 1] > prices[i]) {
      current = prices[i];
      while (i < prices.length && prices[i + 1] > prices[i]) {
        biggest = prices[i + 1];
        i++;
      }
      sumProfit += biggest - current;
    }
  }
  return sumProfit;
};

console.log(maxProfitMedium([7, 1, 5, 3, 6, 4])); //7
console.log(maxProfitMedium([1, 2, 3, 4, 5])); //4

/*
Time Complexity: O(n)
The time complexity is O(n), where n is the number of elements in the prices array. This is because it iterates through the array once, and the while loop inside iterates over a subset of the array at most once.
Space Complexity:  O(1)
The space used does not increase with the size of the input array.
*/
