
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> res;
        map<int, int> hashMap;
        for(int i=0; i<nums.size(); ++i) {
            int y = target - nums[i];
            auto iter = hashMap.find(y);
            if(iter != hashMap.end()) {
                res = {hashMap[y], i};
                break;
            }
            hashMap[nums[i]] = i;
        }
        return res;
    }
};