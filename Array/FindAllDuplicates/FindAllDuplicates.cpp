
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> res;
        for(int i=0; i<nums.size(); ++i) {
            int index = abs(nums[i]) - 1;
            if(nums[index] < 0) { res.push_back(abs(nums[i])); }
            else { nums[index] = -nums[index]; }
        }
        return res;
    }
};