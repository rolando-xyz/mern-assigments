// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
function merge(arr1, arr2){
    // given 2 sorted array, combine them and return 1 sorted array. 
    let arr = []
    while (arr1.length && arr2.length){
        if (arr1[0] < arr2[0]){
            arr.push(arr1.shift())
        }
        else{
            arr.push(arr2.shift())
        }
    }
    // if you return just arr the last part of the array is missing
    return [...arr,...arr1,...arr2]
  }

  const sortedA1 = [];
  const sortedB1 = [];
  //expected output: [];
  const sortedA2 = [5];
  const sortedB2 = [2];
  //expected output: [2, 5];
  const sortedA3 = [2, 3, 4, 7];
  const sortedB3 = [5];
  //expected output: [2, 3, 4, 5, 7];
  const sortedA4 = [1, 2, 4, 6, 9];
  const sortedB4 = [3, 7, 8, 10, 11, 12];
  //expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

  function mergeSort(arr1,arr2){
    //given an unsorted array, return a sorted array using mergeSort
    //HINT: keep separate the array until they are 2 sorted arrays
    //HINT2: You may need to have a recursive function
    //HINT3: Make use of the Merge function you created
    let sorted = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        }
        else {
            sorted.push(arr2.shift());
        }
    }
    while( arr1.length > 0) {
        sorted.push(arr1.shift());
    }
    while (arr2.length > 0){
        sorted.push(arr2.shift());
    }
    return sorted;
}
console.log(mergeSort(sortedA2,sortedB2));
console.log(mergeSort(sortedA3,sortedB3));
console.log(mergeSort(sortedA4,sortedB4));

console.log(merge(sortedA2,sortedB2));
console.log(merge(sortedA3,sortedB3));
console.log(merge(sortedA4,sortedB4));

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];