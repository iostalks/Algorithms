

/**
 * @note 求众数
 * @apiNote  leetcode上说明,一定是具有众数存在的，则可以计算出一个初始值 count,
 * 从数组的下标1开始，如果与下一个数组下标的数字不相等，则count-- 当count 为0 就切换为下一个比较的数字
 * @since 19-3-18 11:24 by jdk 1.8
 */

public static int majorityElement(int[]nums){
        int count=1;
        int maj=nums[0];
        for(int i=1;i<nums.length;i++){
        if(maj==nums[i]){
             count++;
        }else{
              count--;
        if(count==0){
              maj=nums[i+1];
           }
         }
    }
        return maj;
 }