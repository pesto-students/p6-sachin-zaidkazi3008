/*
Given the root of a binary tree,
return its maximum depth.A binary tree's maximum depth
is the number of nodes along the longest path 
from the root node down to the farthest leaf node.
*/

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right =null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    calculateHeight(root) {
        if (!root) {
          return 0;
        }
        let leftHeight = this.calculateHeight(root.left);
        let rightHeight = this.calculateHeight(root.right);
      
        //Simple Way ->
        if (leftHeight > rightHeight){
          return leftHeight + 1;
        } 
        else{
          return rightHeight + 1;
        } 
      }
}

var BN = new BinaryTree();

/*
  Example 1: 
  Input: root = [3,9,20,null,null,15,7]
  Output: 3
  */

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(null);
root.left.right = new Node(null);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(root)
console.log(BN.calculateHeight(root))


  /*
  Example 2:
  Input: root = [1,null,2]
  Output: 2
  */
  let root1 = new Node(1);
  root1.left = new Node(null);
  root1.right = new Node(2);
  
  console.log(root1)
  console.log(BN.calculateHeight(root1))

  
  