/**
 *
 * The distance between a node in a Binary Tree and the tree's root is called the
 * node's depth. Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
 * @param root
 * @param depth
 * @returns {number|*}
 */
function nodeDepthsRecursive(root, depth = 0) {
    if (!root) return 0;

    return depth + nodeDepthsRecursive(root.left, depth + 1) + nodeDepthsRecursive(root.right, depth + 1);
}

function nodeDepthsIterative(root) {
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];

    while (stack.length > 0) {
        let currentItem = stack.pop();
        let node = currentItem.node;
        let depth = currentItem.depth;

        if (node === null) {
            continue;
        }
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1});
    }

    return sumOfDepths;
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

exports.nodeDepthsRecursive = nodeDepthsRecursive;
exports.nodeDepthsIterative = nodeDepthsIterative;
exports.BinaryTree = BinaryTree;
