
/**
 * @note leetcode-三数之和为0
 * @apiNote   思路为 先排序， 然后有两个指针 head和end。 要计算的第一个数一定是负数,所以只要后两个数相加等于
 *  0-第一个数 即可。
 * @since 19-3-18 10:27 by jdk 1.8
 */
public class ThreeSum {

    private static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        //进行排序
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                return result;
            }
            //之前的相等，我选择跳过
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int header = i + 1;
            int end = nums.length - 1;
            int val = 0 - nums[i];
            while (header < end) {
                if (nums[header] + nums[end] == val) {
                    List<Integer> list = Arrays.asList(nums[i], nums[header], nums[end]);
                    result.add(list);
                    while (header < end && nums[end] == nums[end - 1]) end--;
                    while (header < end && nums[header] == nums[header + 1]) header++;
                    end--;
                    header++;
                } else if (nums[header] + nums[end] > val) {
                    end--;
                } else {
                    header++;
                }
            }
        }


        return result;
    }

    public static void main(String[] args) {
        int[] nums = {};
        List<List<Integer>> lists = threeSum(nums);
        System.out.println(lists);

    }
}
