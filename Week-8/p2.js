// Problem 8.2 Validate a binary search Tree
/*  Given the root of a binary tree,
determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

class Node
{
     constructor(data)
     {
         this.data=data;
         this.left= null;
         this.right=null;
     }
 }
//Root of the Binary Tree
let root;
      
/* can give min and max value according to your code or
can write a function to find min and max value of tree. */
/* returns true if given search tree is binary
 search tree (efficient version) */
function isBST()
{
    return isBSTUtil(root, Number.MIN_VALUE,
                           Number.MAX_VALUE);
}
 
/* Returns true if the given tree is a BST and its
  values are >= min and <= max. */
function isBSTUtil(node,min,max)
{
    /* an empty tree is BST */
    if (node == null)
        return true;
    /* false if this node violates
    the min/max constraints */
    if (node.data < min || node.data > max)
        return false;
    /* otherwise check the subtrees recursively
    tightening the min/max constraints */
    // Allow only distinct values
    return (isBSTUtil(node.left, min, node.data-1) &&
            isBSTUtil(node.right, node.data+1, max));
}

/*
Example 1:
Input: root = [2,1,3]
Output: true
*/
/*
root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
console.log(isBST(root))  
*/

/*
Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
*/

root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);
root.right.left = new Node(null);
root.right.right = new Node(null);
root.right.left = new Node(3);
root.right.right = new Node(6);
console.log(isBST(root))  
