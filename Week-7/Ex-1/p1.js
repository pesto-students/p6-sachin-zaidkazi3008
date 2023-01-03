// Problem 7.1 : Reverse the Linked list

// Given a linked list of N nodes. The task is to reverse this list.

//ex-1
/*
input: LinkedList: 1->2->3->4->5->6
Output: 6 5 4 3 2 1
*/



const SingleLinkedList = require('../utilities/linkedList1')



const arr = [1,2,3,4,5,6]
const ll = new SingleLinkedList(arr);
ll.printList();
ll.reverse();
ll.printList();


//ex-2
/*
input: LinkedList: 2->7->8->9->10
Output: 10 9 8 7 2
*/
const arr1 = [2,7,8,9,10]
const ll1 = new SingleLinkedList(arr1);
ll1.printList();
ll1.reverse();
ll1.printList();


// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1)