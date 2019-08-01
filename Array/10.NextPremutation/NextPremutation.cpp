
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        if(nums.size() < 2) { return; }
        int len = nums.size();
        int i = len - 1;
        for(; i>0; --i) {
            if(nums[i] > nums[i-1]) { break; }
        }
        if(i==0) {
            reverse(nums.begin(), nums.end());
            return;
        }
        int j = len - 1;
        for(; j>=i; --j){
            if(nums[j] > nums[i-1]) { break; }
        }
        swap(nums[i-1], nums[j]);
        reverse(nums.begin()+i, nums.end());
        // sort(nums.begin()+i, nums.end());
    }
};