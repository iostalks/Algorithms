/* 荷兰国旗问题
 * 使用三个指针，分别指向当前元素、最右侧的0和最左侧的2
 */

class Solution {
public:
    void sortColors(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        int curr = 0;
        while(curr <= right){
            if(nums[curr] == 0 && curr > left){
                swap(nums[curr], nums[left]);
                left++;
            }
            else if(nums[curr] == 2){
                swap(nums[curr], nums[right]);
                right--;
            }
            else{
                curr++;
            }
        }
    }
};