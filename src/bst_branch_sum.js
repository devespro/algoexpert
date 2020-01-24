/**
 * Write a function that takes in a Binary Tree and returns a list of its
 * branch sums (ordered from leftmost branch sum to rightmost branch sum).
 * A branch sum is the sum of all values in a Binary Tree branch.
 * A Binary Tree branch is a path of nodes in a tree that starts at the root
 * node and ends at any leaf node. Each Binary Tree node has a value stored
 * in a property called "value" and two children nodes stored in properties
 * called "left" and "right," respectively. Children nodes can either be
 * Binary Tree nodes themselves or the None (null) value.
 */
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let sumArray = [];
    branchSumsHelper(root, 0, sumArray);
    return sumArray;
}

function branchSumsHelper(tree, tempSum, array) {
    if (tree === null) {
        return;
    }

    if (tree.left === null && tree.right === null) {
        array.push(tempSum + tree.value);
        return;
    }
    tempSum += tree.value;
    branchSumsHelper(tree.left, tempSum, array);
    branchSumsHelper(tree.right, tempSum, array);
}

exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
