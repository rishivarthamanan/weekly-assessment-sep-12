// 1.Write a function that determines whether a given string is a valid JSON or not.

function isValidJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  console.log(isValidJSON('{"name": "John", "age": 30}')); 
  console.log(isValidJSON('{"name": "John", "age": 30,}')); 
  console.log(isValidJSON('{"name": "John", "age": "30"}')); 
  console.log(isValidJSON('{"name": "John", "age": 30, "city": "New York"}')); 

// 2.Write a function that finds the longest increasing subarray within an array of numbers.
  
function longestIncreasingSubarray(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    let longestSubarray = [arr[0]];
    let currentSubarray = [arr[0]]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        currentSubarray.push(arr[i]);
      } else {
       
        if (currentSubarray.length > longestSubarray.length) {
          longestSubarray = currentSubarray.slice();
        }
        currentSubarray = [arr[i]]; 
      }
    }
  
    if (currentSubarray.length > longestSubarray.length) {
      longestSubarray = currentSubarray;
    }
  
    return longestSubarray;
  }
  
  console.log(longestIncreasingSubarray([1, 2, 3, 1, 2, 3, 4, 5])); 
  console.log(longestIncreasingSubarray([5, 4, 3, 2, 1])); 
  console.log(longestIncreasingSubarray([1, 2, 3, 4, 3, 2, 1])); 

//4.Implement a function to calculate the factorial of a given non-negative integer using recursion.
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(0));
  console.log(factorial(5));
  console.log(factorial(10));

  //5.Write a function that finds all pairs of elements in an array that add up to a specific target sum.
function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seen = new Set();
  
    for (const num of arr) {
      const complement = targetSum - num;
      if (
        seen.has(complement) ||
        (complement === num && arr.indexOf(num) !== arr.lastIndexOf(num))
      ) {
        pairs.push([num, complement]);
      }
      seen.add(num);
    }
  
    return pairs;
  }
  console.log(findPairsWithSum([1, 2, 3, 4, 5], 7));
  console.log(findPairsWithSum([1, 2, 3, 4, 5], 10));
  console.log(findPairsWithSum([3, 4, 2, 1, 5], 8));
  
  //6.Create a function that finds the largest common prefix among an array of strings.
  function longestCommonPrefix(strings) {
    if (strings.length === 0) {
      return "";
    }
  
    return strings.reduce((prefix, currentString) => {
      let i = 0;
      while (
        i < prefix.length &&
        i < currentString.length &&
        prefix[i] === currentString[i]
      ) {
        i++;
      }
      return prefix.slice(0, i);
    }, strings[0]);
  }
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  console.log(longestCommonPrefix(["dog", "car", "race"]));
  console.log(longestCommonPrefix(["apple", "app", "apricot"]));

  //8.Implement a function that sorts an array of objects by a specific property in ascending order.
function sortByProperty(arr, prop) {
    return arr.slice().sort((a, b) => {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
  ];
  console.log(sortByProperty(people, "age"));
  
  

