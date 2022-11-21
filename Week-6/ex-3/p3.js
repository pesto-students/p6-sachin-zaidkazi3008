/*
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
Example 1: Input:N = 5  arr[]= {0 2 1 2 0}  Output:0 0 1 2 2
Explanation: 0's 1's and 2's are segregated into ascending order.
Example 2: Input:N = 3  arr[] = {0 1 0} Output:0 0 1
Explanation: 0s 1s and 2s are segregated into ascending order. 
Time Complexity: O(N) Expected Auxiliary Space: O(1) 
Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2
*/


function insertionSort(arr){
    //Start from the second element.
    for(let i = 1; i < arr.length;i++){ //O(n)
        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){  //O(n)
            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){
                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
            }
        }
    };

  return arr;
}
//! EX: 1
console.log(insertionSort([0,2,1,2,0]));
//! EX: 2
console.log(insertionSort([0,1,0]));

// TC : O(n^2)
//SC : O(1)