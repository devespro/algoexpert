
const bstProgram = require('../src/bst_closest_value');
const chai = require('chai');


describe('Find a closest value in BST tests', () => {
    it('should return a valid closest value #1', () => {
        const root = new bstProgram.BST(10);
        root.left = new bstProgram.BST(5);
        root.left.left = new bstProgram.BST(2);
        root.left.left.left = new bstProgram.BST(1);
        root.left.right = new bstProgram.BST(5);
        root.right = new bstProgram.BST(15);
        root.right.left = new bstProgram.BST(13);
        root.right.left.right = new bstProgram.BST(14);
        root.right.right = new bstProgram.BST(22);
        const expected = 13;

        const actual = bstProgram.findClosestValueInBST(root, 12);

        chai.expect(actual).to.deep.equal(expected);
    });

    it('should return a valid closest value #2', () => {
        const root = new bstProgram.BST(10);
        root.left = new bstProgram.BST(5);
        root.left.left = new bstProgram.BST(2);
        root.left.left.left = new bstProgram.BST(1);
        root.left.right = new bstProgram.BST(5);
        root.right = new bstProgram.BST(15);
        root.right.left = new bstProgram.BST(13);
        root.right.left.right = new bstProgram.BST(14);
        root.right.right = new bstProgram.BST(22);
        const expected = 14;

        const actual = bstProgram.findClosestValueInBST(root, 14);

        chai.expect(actual).to.deep.equal(expected);
    });
});

