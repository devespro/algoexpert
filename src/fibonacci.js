/**
 * The Fibonacci sequence is defined as follows:
 * the first number of the sequence is 0, the
 * second number is 1, and the nth number is
 * the sum of the (n - 1)th and (n - 2)th numbers.
 * Write a function that takes in an integer n
 * and returns the nth Fibonacci number.
 */

function getNthFibonacciRecursive(number) {
    if (number === 2) {
        return 1;
    }
    if (number === 1 || number < 0) {
        return 0;
    }
    return getNthFibonacciRecursive(number - 2) + getNthFibonacciRecursive(number - 1);
}

function getNthFibonacciRecursiveWithCache(number, cache = {1: 0, 2: 1}) {
    if (number < 0) {
        return 0;
    }
    if (number in cache) {
        return cache[number];
    } else {
        cache[number] = getNthFibonacciRecursiveWithCache(number - 2, cache) + getNthFibonacciRecursiveWithCache(number - 1, cache);
        return cache[number];
    }
}

function getNthFibonacciIteratively(number) {
  let lastNumbers = [0, 1];
  let counter = 3;
  while (counter <= number) {
      let nextFibonacci = lastNumbers[0] + lastNumbers[1];
      lastNumbers[0] = lastNumbers[1];
      lastNumbers[1] = nextFibonacci;
      counter++;
  }
  return number > 1 ? lastNumbers[1] : lastNumbers[0];
}

exports.getNthFibonacciRecursive = getNthFibonacciRecursive;
exports.getNthFibonacciRecursiveWithCache = getNthFibonacciRecursiveWithCache;
exports.getNthFibonacciIteratively = getNthFibonacciIteratively;