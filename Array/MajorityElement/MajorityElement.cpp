
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int major;
        int count = 0;
        for(auto num : nums) {
            if(count == 0) { major = num; }
            count += (num == major) ? 1 : -1;
        }
        return major;
    }
};