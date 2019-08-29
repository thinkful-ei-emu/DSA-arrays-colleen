const Array = require("./Array");

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  //console.log(arr.get(0))
  //getting 1st item in arr
  arr.remove(0);

  arr.remove(0);
  arr.remove(0);

  //removing all items (first index x3 from array)
  arr.push("colleen");
  //adding one item
  //console.log(arr.get(0))
  //results in NaN--because the array class can't push a string at this point
  //setting the value as ptr in memory
  //_resize() increases the capacity for the potential array in memory
}

//push: length: increases to 6 because of adding six values
//push capacity: 12 = size ratio of 3--when add a value above capacity
// length of array + 1 x 3
//push memory address: 3

//pop: length of array decreasing to 3 (removing val)
//pop capacity remains as 12 because not changing size/memory capacity
//pop memory address remains as 3--removing last value in array
main();

function urlIfy(string) {
  let arr = string.split(" ");
  let urlify = arr.join("%20");
  console.log(urlify);
  return urlify;
}
//time complexity: length of string is input, number of splits will
//depend on n number of split, which is O(n)
//urlIfy('colleen higgins')

function filter(array) {
  let filteredArray = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] === 5) {
      filteredArray;
    } else {
      filteredArray.push(array[i]);
    }
  }
  console.log(filteredArray);
}

//filter([5,10,2,3])
//should output [10, 2, 3]
//input is length, will loop through length of array, and push despite instance of 5,
//therefore complexity is O(n)

function maxSum(array) {
  let currentBigSum = array[0];
  for (i = 0; i <= array.length; i++) {
    let currentSum = 0;
    for (j = i; j <= array.length; j++) {
      currentSum += array[j];
      if (currentSum > currentBigSum) {
        currentBigSum = currentSum;
      }
    }
    /*//will find biggest possible sum between 2  
      let biggestSum = 0;
      let bigNum =0 
    for(let i=0; i <=array.length; i++){
      if(array[i]>bigNum){
        bigNum = array[i]
      }
    }
    let search = array.filter(num=> num != bigNum)
    for(let i=0; i<=search.length; i++){
      let ans = bigNum + search[i]
      if(ans > biggestSum){
        biggestSum = ans
      }
    } */
    //console.log(bigNum)
    //console.log(biggestSum)
  }
  console.log(currentBigSum);
}

//maxSum([4, 6, -3, 5, -2, 1])
//maxSum is a n^3 time complexity--looping through array and then for each index as start point, summing up the rest of the values and comparing to stored last highest sum
/* 
Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11] */
function mergeArrays(arr1, arr2) {
  let bigArray = arr1.concat(arr2);
  bigArray.sort((a, b) => a - b);
  console.log(bigArray);
}

//mergeArrays([1, 3, 6, 8, -11], [2, 3, 5, 8, 9, 10])
//first step creating larger array-On(first)+m(second) only smooshes arrays togehter
//second step bigArray.sort comparing order to create ascending order, this will be dependent on the size/length of the array so it's O(n)--the sort itself here is log(n) because it is comparing 1 to 2 and cutting comparison down in each step of sort

/* Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny' */
function characterDeleter(string, characterstoDelete) {
  let output = "";

  for (let i = 0; i <= string.length; i++) {
    let matched = false;
    //loop through the characters of the string
    //for each character need to compare to each of the filtering characters
    for (let j = 0; j <= characterstoDelete.length; j++) {
      if (string[i] === characterstoDelete[j]) {
        matched  = true;
        break;
      }
    }
    if (!matched){
     output += string[i]
    }

  }

  console.log(output)
}

//characterDeleter("Battle of the Vowels: Hawaii vs. Grozny", "aeiou");
//time complexity-- O(n * m)


/* Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27] */
function products(arr){
let arrOfProducts = []

for(let i=0; i<arr.length; i++){
  let mult = arr.filter(item => item !=arr[i])
  let item = mult[0]
  for(let j=1; j<mult.length; j++){
    item *=mult[j]
  }
  arrOfProducts.push(item)
}
console.log(arrOfProducts)
}
products([1, 3, 9, 8])
//O(n^2)
function productsTwo(arr){
  let arrOfProducts = []
  let product = 1
  for(let i=0; i<arr.length; i++){
  product *= arr[i]
  }
  for(let i=0; i<arr.length; i++){
    arrOfProducts.push(product/arr[i])
  }
  console.log(arrOfProducts)
}

//productsTwo([1, 3, 9, 8])
//O(n)

/* Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

Input:
[
[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]
];
Output:
[
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]]; */

function twoDArray(arrayOfArrays){
for (let row = 0; row < arrayOfArrays.length; row++){
  let containsZero=false;
  //go through row (array)-in each row--column will be index 0 of each row, then so on
  for(let column = 0; column < arrayOfArrays.length; column++) {
  if (arrayOfArrays[row][column] === 0){
    containsZero = true;
    console.log(containsZero);
  }
  if(containsZero){
    arrayOfArrays[row][column] = 0;
  }
  }
  
  

}
console.log(arrayOfArrays)
}

twoDArray([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
  ])