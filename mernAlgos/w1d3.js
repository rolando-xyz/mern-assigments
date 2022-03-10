// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let maxNumber = 0;
let temp = 0; 
let swapIndex =0;


function selectionSort(nums) {
  let end = nums.length-1
  //given an unsorted array, sort the array using selectionSort
  // i.e. find the largest value and put it at the end
  while (end > 1) {
    for(let i=0; i<end; i++) {
      if (nums[i] > maxNumber) {
        maxNumber = nums[i]
        swapIndex = i;
      }
    }
    temp = nums[end];
    nums[end] = maxNumber
    nums[swapIndex] = temp;
    maxNumber = 0;
    swapIndex = 0;
    end--;
  }
  return nums;
}

function selectionSort(nums, result = []) {   
    if (nums.length === 1) {
       result = nums.concat(result);
    } else {
       let largest = nums[0];
       let x = 0;
    
       for (let i = 1; i < nums.length; i++) {
          if (largest < nums[i]) {
             largest = nums[i]
             x = i;
          }
       }
 
       let temp = nums[nums.length - 1];
       nums[nums.length - 1] = nums[x];
       nums[x] = temp;
 
       let tempArr = [nums.pop()];
       result = tempArr.concat(result);
       
       return nums.length === 0 ? result : selectionSort(nums, result);
    }
    return result;
 }

console.log(selectionSort(numsRandomOrder));

