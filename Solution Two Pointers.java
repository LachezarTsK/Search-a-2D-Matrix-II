
public class Solution {

    public boolean searchMatrix(int[][] matrix, int target) {
        int up = matrix.length - 1;
        int right = 0;
        while (up >= 0 && right < matrix[0].length) {
            if (matrix[up][right] == target) {
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
    }
}
