
// （时间O（n），空间O（n），通俗易懂）

import java.util.HashMap;

public class Solution {

    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer,Integer> hashMap = new HashMap<>();

        for (int i = 0; i  < nums.length; i++){

            int key = target - nums[i];

            if (hashMap.containsKey(key)){

                return new int[]{hashMap.get(key), i};

            }

            hashMap.put(nums[i],i);

        }

        throw new IllegalArgumentException("No two sum solution");

    }

}
