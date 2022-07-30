
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let diagonalSize = Math.min(matrix.length, matrix[0].length);

    for (let i = 0; i < diagonalSize; ++i) {
        if (binarySearch(matrix, target, i, true)) {
            return true;
        }
        if (binarySearch(matrix, target, i, false)) {
            return true;
        }
    }
    return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @param {number} fixed
 * @param {number} row
 * @return {boolean}
 */
function binarySearch(matrix, target, fixed, row) {
    let left = 0;
    let right = row ? matrix.length - 1 : matrix[0].length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        let value = row ? matrix[middle][fixed] : matrix[fixed][middle];

        if (value === target) {
            return true;
        }
        if (value < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
}
