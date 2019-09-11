// 解法一：O(n)
const lengthOfLongestSubstring = (str) => {
  let maxLength = 0;
  const queue = []; // 使用队列存储无重复子串
  for (const element of str) {
    // 从头部开始检测是否有重复 O(n)
    const eleIdx = queue.indexOf(element);
    if (eleIdx != -1) {
      // 移除重复元素前的元素
      queue.splice(0, eleIdx + 1);
    }
    queue.push(element);

    maxLength = Math.max(queue.length, maxLength);
  }
  return maxLength;
}

// 解法二：O(n^2) 
const lengthOfLongestSubstring2 = (str) => {
  const cache = {};
  let start = max = 0;
  for (let i = 0, n = str.length; i < n; ++i) {
    const char = str[i];
    const newStart = typeof cache[char] === 'undefined' ? 0 : cache[char] + 1;
    start = Math.max(start, newStart);
    cache[char] = i;
    max = Math.max(i - start + 1, max);
  }
  return max;
}