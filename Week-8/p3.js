/* Problem 8.3: Binary Tree Level Order Traversal
Given the root of a binary tree,
return the level order traversal of its nodes' values.
(i.e.,from left to right, level by level).
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
    levelOrder(root) {
        let queue = [] ;
        queue.push(root);
        while (queue.length !== 0) {
          let node = queue.shift();
          process.stdout.write(node.data + " ");
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
  
      }
}

var BN = new BinaryTree();

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(5);
root.left.right = new Node(10);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(root)
console.log("Level Order Traversal")
console.log(BN.levelOrder(root))


