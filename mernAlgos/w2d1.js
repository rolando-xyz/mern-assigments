
function partition(nums, left=0, right=nums.length-1){
    //Define the pivot as the middle point of the array
    let pivot = nums[Math.floor((left + right) / 2)]
  
    //Compare the numbers in the left split to the right split
    //Iterate through each side to find comparisons
    while(left <= right){
      while(nums[left] < pivot){
        left++;
      }
      while(nums[right] > pivot){
        right--;
      }
      //If the left and right values are on the wrong sides, swap them
      if(left <= right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
      }
    }
    return left;
  }
  
  function quickSort(nums = [], left = 0, right = nums.length - 1){
    let index;
    if(nums.length > 1){
      index = partition(nums, left, right);
      if(left < index - 1){
        quickSort(nums, left, index - 1);
      }
      if(index < right){
        quickSort(nums, index, right);
      }
    }
    return nums;
  }
  
  // example for nums1: (if middle idx is picked)
  // pivot = 8, pivot index = 4 
  // expected arr after partition:
  // [3,2,7,   8,   10, 11,14]
  // numbers on the left/right do not need to be in order
  // 3,2,7 are smaller than 8. 10, 11, 14 are larger than 8. 
  // return: index of the pivot: 3
  const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
  const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
  const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
  const nums4 = [2, 1];
  
  
console.log(partition(nums1))
console.log(quickSort(nums1))