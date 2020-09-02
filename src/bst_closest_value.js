class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findClosestValueInBST(tree, target) {
    return findClosestValueInBSTHelper(tree, target, Number.MAX_VALUE);
}

function findClosestValueInBSTHelper(tree, target, closest) {
    if (tree === null) {
        return closest;
    }

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }

    if (target > tree.value) {
        return findClosestValueInBSTHelper(tree.right, target, closest);
    } else if (target < tree.value) {
        return findClosestValueInBSTHelper(tree.left, target, closest);
    } else {
        return closest;
    }
}

exports.findClosestValueInBST = findClosestValueInBST;
exports.BST = BST;
