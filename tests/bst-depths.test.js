const program = require('../src/bst_depths');
const chai = require('chai');

describe('BST depth sum tests', () => {
   it('should return correct depth sum value with an iterative algorithm', () => {
       const root = new program.BinaryTree(1);
       root.left = new program.BinaryTree(2);
       root.left.left = new program.BinaryTree(4);
       root.left.left.left = new program.BinaryTree(8);
       root.left.left.right = new program.BinaryTree(9);
       root.left.right = new program.BinaryTree(5);
       root.right = new program.BinaryTree(3);
       root.right.left = new program.BinaryTree(6);
       root.right.right = new program.BinaryTree(7);

       const actual = program.nodeDepthsRecursive(root);

       chai.expect(actual).to.deep.equal(16);
   });

   it('should return correct depth sum value with iterative algorithm', () => {
       const root = new program.BinaryTree(1);
       root.left = new program.BinaryTree(2);
       root.left.left = new program.BinaryTree(4);
       root.left.left.left = new program.BinaryTree(8);
       root.left.left.right = new program.BinaryTree(9);
       root.left.right = new program.BinaryTree(5);
       root.right = new program.BinaryTree(3);
       root.right.left = new program.BinaryTree(6);
       root.right.right = new program.BinaryTree(7);

       const actual = program.nodeDepthsIterative(root);

       chai.expect(actual).to.deep.equal(16);
   })
});
