/*Your input
[1,2,3,4,5]
Expected
[4,2,5,1,3]

Your input
[1,null,2,3,4,5]
Expected
[1,5,3,2,4]

Your input
[1,2,3,null,4,5]
Expected
[2,4,1,5,3]

Tree Traversals (Inorder, Preorder and Postorder)
Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways. 
Following are the generally used methods for traversing trees:
Example:
                            25  --- (root)
                            |
                --------------------------
                |                         |
                15                        50
                |                         |
          -------------             -------------
          |           |             |           |       
          10          22            35          70
          |           |             |           |
        ------      ------        ------      ------
        |    |     |     |        |     |     |     |
        4   12    18     24       31    44    66    90

InOrder(root) visits nodes in the follow order:
4,10,12,15,18,22,24,25,31,35,44,50,66,70,90
A Pre-order traversal visits nodes in the follow order:
25,15,10,4,12,22,18,24,50,35,31,44,70,66,90
A Post-order traversal visits nodes in the follow order:
4,12,10,18,24,22,15,31,44,35,66,90,70,50,25

Uses of Inorder Traversal:
In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. 
To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal is reversed can be used. 
Example: In order traversal for the above-given figure is 4 2 5 1 3.
*/

// javascript program for different tree traversals

/* Class containing left and right child of current
  node and key value*/
class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}

// Root of Binary Tree
var root = null;

/*
 * Given a binary tree, print its nodes according to the "bottom-up" postorder
 * traversal.
 */
function printPostorder(node) {
  if (node == null) return;

  // first recur on left subtree
  printPostorder(node.left);

  // then recur on right subtree
  printPostorder(node.right);

  // now deal with the node
  console.log(node.key + ' ');
}

/* Given a binary tree, print its nodes in inorder */
function printInorder(node) {
  if (node == null) return;

  /* first recur on left child */
  printInorder(node.left);

  /* then print the data of node */
  console.log(node.key + ' ');

  /* now recur on right child */
  printInorder(node.right);
}

/* Given a binary tree, print its nodes in preorder */
function printPreorder(node) {
  if (node == null) return;

  /* first print data of node */
  console.log(node.key + ' ');

  /* then recur on left subtree */
  printPreorder(node.left);

  /* now recur on right subtree */
  printPreorder(node.right);
}

// Driver method

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log('Preorder traversal of binary tree is <br/>');
printPreorder(root);

console.log('<br/>Inorder traversal of binary tree is <br/>');
printInorder(root);

console.log('<br/>Postorder traversal of binary tree is <br/>');
printPostorder(root);
