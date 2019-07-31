
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> res;
        if(nums.size() < 3) { return  res; }
        sort(nums.begin(), nums.end());
        for(int i=0; i<nums.size()-2; ++i) {
            if(nums[i] > 0) { break; }
            if(i>0 && nums[i] == nums[i-1]) { continue; }
            int l = i + 1, r = nums.size() - 1;
            while(l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if(sum == 0) {
                    res.push_back({nums[i], nums[l], nums[r]});
                    while(l < r && nums[l] == nums[l+1]) { l++; }
                    while(l < r && nums[r] == nums[r-1]) { r--; }
                    l++;
                    r--;
                }
                else if(sum < 0) {
                    while(l < r && nums[l] == nums[l+1]) { l++; }
                    l++; 
                }
                else {
                    while(l < r && nums[r] == nums[r-1]) { r--; }
                    r--; 
                }
            }
        }
        return res;
    }
};