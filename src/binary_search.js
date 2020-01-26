/**
 * Write a function that takes in a sorted array of integers as well as a target integer.
 * The function should use the Binary Search algorithm to find if the target number is
 * contained in the array and should return its index if it is, otherwise -1.
 */
// recursive version
function binarySearchRecursive(array, target) {
    let findNumberIndex = array.indexOf(target);
    if (array.length === 1 || findNumberIndex !== -1) {
        return findNumberIndex;
    }

    let middleNumber = Math.floor(array.length / 2);

    if (middleNumber < target) {
        return binarySearchRecursive(array.slice(0, middleNumber),target);
    } else {
        return binarySearchRecursive(array.slice(0, middleNumber), target);
    }
}

//iterative version
function binarySearchIterative(array, target) {
    return binarySearchIterativeHelper(array, target, 0, array.length - 1);
}

function binarySearchIterativeHelper(array, target, leftIndex, rightIndex) {
    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let potentialMatch = array[middleIndex];
        if (target === potentialMatch) {
            return middleIndex;
        } else if (target < potentialMatch) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

exports.binarySearchRecursive = binarySearchRecursive;
exports.binarySearchIterative = binarySearchIterative;