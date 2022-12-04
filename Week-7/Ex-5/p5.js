/*
Given an array arr{} of size N having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.
Next greater element of an element in the array is the nearest element on the right which is greater than the current element. If there does not exist next greater of current element,
then next greater element for current element is -1. 
For example, next greater of the last element is always -1.
*/



function nextGreaterElement(arr, n)
{
  var next, i, j;
  for (i = 0; i < n; i++)
  {
    next = -1;
    for (j = i + 1; j < n; j++)
    {
      if (arr[i] < arr[j])
      {
        next = arr[j];
        break;
      }
    }
    console.log(arr[i] + " => " + next);
  }
}

var arr = [11, 13, 21, 3];
var n = arr.length;
nextGreaterElement(arr, n);
