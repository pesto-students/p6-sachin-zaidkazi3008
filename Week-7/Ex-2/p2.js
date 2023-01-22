// Problem 7.2: Rotate Linked List
// Given a singly linked list of size N.
//The task is to left-shift the linked list by k nodes,
//where k is a given positive integer smaller than or equal to length of the linked list.
/*
EX-1
Input: 
N = 5
value[] = {2, 4, 7, 8, 9}
k = 3
Output: 8 9 2 4 7
*/

const SingleLinkedList = require('../utilities/linkedList1')

const arr = [2, 4, 7, 8, 9]
const ll = new SingleLinkedList(arr);
ll.printList();
ll.rotate(3);
ll.printList();


/*
EX-2
Input: 
N = 8
value[] = {1,2,3,4,5,6,7,8}
k = 4
Output: 5 6 7 8 1 2 3 4
*/

const arr1 = [1,2,3,4,5,6,7,8]
const ll1 = new SingleLinkedList(arr1);
ll1.printList();
ll1.rotate(4);
ll1.printList();
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1)