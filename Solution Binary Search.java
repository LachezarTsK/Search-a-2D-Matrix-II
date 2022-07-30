
public class Solution {

    public boolean searchMatrix(int[][] matrix, int target) {
        int diagonalSize = Math.min(matrix.length, matrix[0].length);

        for (int i = 0; i < diagonalSize; ++i) {
            if (binarySearch(matrix, target, i, true)) {
                return true;
            }
            if (binarySearch(matrix, target, i, false)) {
                return true;
            }
        }
        return false;
    }

    private boolean binarySearch(int[][] matrix, int target, int fixed, boolean row) {
        int left = 0;
        int right = row ? matrix.length - 1 : matrix[0].length - 1;

        while (left <= right) {
            int middle = left + (right - left) / 2;
            int value = row ? matrix[middle][fixed] : matrix[fixed][middle];

            if (value == target) {
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
}
