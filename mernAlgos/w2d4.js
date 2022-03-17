// To check if the Object has the key: 
//https://dmitripavlutin.com/check-if-object-has-property-javascript/
// more for-loop https://bitsofco.de/for-in-vs-for-of/
            //0.  1.  2.  3
            const nums1 = [2, 11, 7, 15];
            const targetSum1 = 9;
            // Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
            const expected1 = [0, 2];
            //nums[0] + nums[2] === targetSum1
            
            
            const nums2 = [10, 3, 2, 5, 4, -1];
            const targetSum2 = 6;
            const expected2 = [2, 4];
            
            const nums3 = [3, 8, 4, 1, 9, -2, 0];
            const targetSum3 = 6;
            const expected3 = [1, 5];
            
            
               
            // Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
            // Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw
            
            
            function twoSum(nums, targetSum) {
              
              //given an unsorted array and a target sum
              // find out the possible combination that can add up to the target sum
            }
            //***************************** */
            
            
            const nums4 = [1, 2, 1, 2, 3, 1]; //[1,1,1,2,2,3]
            const k4 = 2;
            const expected4 = [1, 2];
            // Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements
            
            const nums5 = [3, 2, 0, 2, 0, 0];//[0,0,0,2,2,3]
            const k5 = 1;
            const expected5 = [0];
            // Explanation: k being 1 means return the single most frequent element
            
            const nums6 = [1, 2, 3, 2, 1, 3];//[1, 1, 2, 2, 3, 3]
            const k6 = 3;
            const expected6 = [1, 2, 3];
            
            // From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8
            function kMostFrequent(nums, k) {
              //given an unsorted array and k
              // find the kth most frequent element
            
            }