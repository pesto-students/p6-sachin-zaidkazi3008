/*
Input Format First argument is an integer array A of size N. 
Second argument is an integer B.Output Format Return 1 if any such pair exists else return 0.
Example Input 
Input 1: A = [5, 10, 3, 2, 50, 80] B = 78  Output 1: 1
Input 2: A = [-10, 20] B = 30 Output 2: 1
Explanation 1: Pair (80, 2) gives a difference of 78.
Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30
*/



function pairSum(array,sumCheck){
    for(let i =0; i<array.length;i++){
        for(let j = i+1; j<array.length; j++){
            if(Math.abs(array[i]-array[j]) === Math.abs(sumCheck)){
                return 1;
            }
        }
    }
    return 0;
}

console.log(pairSum([5, 10, 3, 2, 50, 80],78));
console.log(pairSum([-10,20],30));
