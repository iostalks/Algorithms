const findDuplicates = (nums) => {
    const res = [];
    for (let i = 0; i < nums.length; ++i) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            res.push(Math.abs(index) + 1);
        } else {
            nums[index] = -nums[index]
        }
    }
    return res;
}

const r = findDuplicates([1,2,3,2,7,5,6,1]);
console.log(r);

