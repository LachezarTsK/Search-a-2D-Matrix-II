
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let up = matrix.length - 1;
    let right = 0;
    while (up >= 0 && right < matrix[0].length) {
        if (matrix[up][right] === target) {
            return true;
        }
        if (matrix[up][right] > target) {
            --up;
            continue;
        }
        if (matrix[up][right] < target) {
            ++right;
        }
    }
    return false;
};
