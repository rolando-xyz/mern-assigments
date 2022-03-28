// ---------- palindrome -----------
// tacocat
const str1 = "";
// expected1 = false;

const str2 = "a";
// expected2 = true;

const str3 = "ddaa"; //
// expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
// expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
// expected5 = true;
// Explanation: "daaad" "adada"

const str6 = "abc";
// expected6 = false;


// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.
// 1. if there are two of every letter it can be a palindrome
// 2. if string.length < 1 then not a palindrome
function canStringBecomePalindrome(str) {
  const map = {}
  if (str.length === 1) {
      return true
  } else if (str.length === 0){
      return false
  } else if (str.length === 3) {
      if (str[0] === str[1] || str[0] === str[2] || str[2] === str[1]) {
        return true
      } else {
        return false
      }
  }else{
    for(letter of str){
      if(str.hasOwnProperty(letter)){
        map[letter] += 1
      }
      else{map[letter] = 1}
    }
  }
console.log(map)
}
// the string you are given is unordered, which means... instead of "abba", it can be "aabb"
// think about the condition you are checking in line 36 :)
// that condition check is if the str.length === 3
console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))















// -----------DROP IT ---------------

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
  return elem > 5;
};
// expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 3;
};
// expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
// expected3 = [];

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

function dropIt(arr, callbackFunc) {


}