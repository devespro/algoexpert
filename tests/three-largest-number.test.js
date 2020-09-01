const program = require('../src/three-largest-numbers');
const chai = require('chai');

describe('Three largest numbers in an array tests', () => {
   it('should return three largest numbers from an array #1', () => {
        const array = [123, -4, 445, 0, 453, 17, 34];

        const threeLargestNumbers = program.findThreeLargestNumbers(array);

        chai.expect(threeLargestNumbers).to.deep.equal([123, 445, 453]);
   });
   it('should return three largest numbers from an array #2', () => {
        const array = [0, 4, 2, 10, -34, 17, 9];

        const threeLargestNumbers = program.findThreeLargestNumbers(array);

        chai.expect(threeLargestNumbers).to.deep.equal([9, 10, 17]);
   });
   it('should return three largest numbers from an array #3', () => {
        const array = [1, 34, 11, 78, -12, 0, -34];

        const threeLargestNumbers = program.findThreeLargestNumbers(array);

        chai.expect(threeLargestNumbers).to.deep.equal([11, 34, 78]);
   });
   it('should return three largest numbers from an array #4', () => {
        const array = [1, 4, 2, 4, 8, 2, -4];

        const threeLargestNumbers = program.findThreeLargestNumbers(array);

        chai.expect(threeLargestNumbers).to.deep.equal([4, 4, 8]);
   });
   it('should return three largest numbers from an array #5', () => {
        const array = [20, 30, 40, 10, -50, 60, 30];

        const threeLargestNumbers = program.findThreeLargestNumbers(array);

        chai.expect(threeLargestNumbers).to.deep.equal([30, 40, 60]);
   });
});
