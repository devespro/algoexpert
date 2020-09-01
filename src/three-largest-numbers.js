/**
 * Write a function that takes in an array of at least three integers and,
 *  without sorting the input array, returns a sorted array of the three largest
 *  integers in the input array.
 *
 *  The function should return duplicate integers if necessary; for example, it
 * should return [10, 10, 12]  for an input array of [10, 5, 9, 10, 12]
 *
 */

function findThreeLargestNumbers(array) {
    const threeLargestNumbers = [null, null, null];
    for (let number of array) {
        updateNumbers(number, threeLargestNumbers);
    }

    return threeLargestNumbers;
}

function updateNumbers(number, array) {
    if (array[2] === null || number > array[2]) {
        shiftAndUpdate(array, number, 2);
    } else  if (array[1] === null || number > array[1]) {
        shiftAndUpdate(array, number, 1);
    } else if (array[0] === null || number > array[0]) {
        shiftAndUpdate(array, number, 0);
    }
}

function shiftAndUpdate(array, number, index) {
    for (let i = 0; i <= index; i++) {
        if (i === index) {
            array[i] = number;
        } else {
            array[i] = array[i+1];
        }
    }
}


exports.findThreeLargestNumbers = findThreeLargestNumbers;
