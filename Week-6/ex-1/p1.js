
//Max Sum Contiguous Subarray
// The first and the only argument contains an integer array, 
// A. Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.
// Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000
// For example

/*Input 1: A = [1, 2, 3, 4, -10]  Output 1: 10
Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6
Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.
*/

const A = [1, 2, 3, 4, -10];// 10
// const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6

let max_val = Number.MIN_VALUE;
let max_end = 0;
let final_sub_array = [];
for (let i = 0; i < A.length; i++) {

    max_end += A[i] ;  // 0
    if(max_val < max_end){
        max_val = max_end;
        final_sub_array.push(A[i]);
    }
    if(max_end < 0){
        max_end = 0;
    }
}
console.log(max_val);
console.log(final_sub_array);

// Time Complexity : O(N)
// Space Complexity : O(N)