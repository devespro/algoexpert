/**
 * Write a function that takes in a non-empty array of distinct integers
 * and an integer representing a target sum. If any two numbers in the
 * input array sum up to the target sum, the function should return them
 * in an array. If no two numbers sum up to the target sum, the function
 * should return an empty array. Assume that there will be at most one
 * pair of numbers summing up to the target sum.
 */
function findPairWithSum(pairs, sum){
    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            if (pairs[i] + pairs[j] === sum) {
                return [pairs[i], pairs[j]];
            }
        }
    }
    return [];
}

function findPairWithSumWithCache(pairs, targetSum) {
    let cache = {};
    for (let number of pairs) {
        if (targetSum - number in cache) {
            return [targetSum - number, number];
        } else {
            cache[number] = true;
        }
    }
    return [];
}

function findPairWithSumIterative(pairs, targetSum) {
    pairs.sort((a,b) => a - b);
    let leftIndex = 0;
    let rightIndex = pairs.length - 1;

    while (leftIndex < rightIndex) {
        let pairSum = pairs[leftIndex] + pairs[rightIndex];
        if (pairSum === targetSum) {
            return [pairs[leftIndex],  pairs[rightIndex]];
        } else if (pairSum < targetSum) {
            leftIndex++;
        } else if (pairSum > targetSum) {
            rightIndex --;
        }
    }
    return [];
}

exports.findPairWithSum = findPairWithSum;
exports.findPairWithSumWithCache = findPairWithSumWithCache;
exports.findPairWithSumIterative = findPairWithSumIterative;