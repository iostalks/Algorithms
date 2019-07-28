
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int len = nums.size();
        for (int i = 0; i < len; ++i) {
            int tmp = nums[i];
            while (tmp > 0 && tmp <= len && nums[tmp-1] != tmp) {
                nums[i] = nums[tmp-1];
                nums[tmp-1] = tmp;
                tmp = nums[i];
            }
        }
        for (int i = 0; i < len; ++i) {
            if (nums[i]-1 != i) { return i + 1; }
        } 

        return len + 1;
    }
};