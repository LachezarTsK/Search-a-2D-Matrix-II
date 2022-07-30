
#include <vector>
using namespace std;

class Solution {
public:

    bool searchMatrix(vector<vector<int>>&matrix, int target) {
        int diagonalSize = min(matrix.size(), matrix[0].size());

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

    bool binarySearch(const vector<vector<int>>&matrix, int target, int fixed, bool row) {
        int left = 0;
        int right = row ? matrix.size() - 1 : matrix[0].size() - 1;

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
};
