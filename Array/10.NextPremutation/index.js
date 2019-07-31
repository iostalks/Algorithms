var nextPermutation = function(nums) {
	const len = nums.length;
	if (len < 2) return nums;

	let prev = nums[len - 1];
	let k = len - 2;
	for (k; k >= 0; --k) {
		if (prev > nums[k]) {
			break;
		}
		prev = nums[k];
	}
	if (k < 0) {
		return nums.reverse();
	}
	// find rightest index for which value larger than nums[k]
	let l = len - 1;
	for(l; l > k; --l) {
		if (nums[l] > nums[k]) {
			break;
		}
	}
	// swap in-place
	[nums[k], nums[l]] = [nums[l], nums[k]];
	// reverse start with i, equal to sort
	const reverse = (arr, i) => {
		const end = arr.length - 1;
		const mid = (i + end) / 2;
		for (let j = i; j <= mid; ++j) {
			[arr[j], arr[end-(j-i)]] = [arr[end-(j-i)], arr[j]];
		}
		return arr;
	};
	return reverse(nums, k + 1);
};

