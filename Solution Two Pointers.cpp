
#include <vector>
using namespace std;

class Solution {
    
public:
    bool searchMatrix(vector<vector<int>>&matrix, int target) {
        int up = matrix.size() - 1;
        int right = 0;

        while (up >= 0 && right < matrix[0].size()) {
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
};
