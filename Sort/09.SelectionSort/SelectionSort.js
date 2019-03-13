// 选择排序
// 原地、不稳定、O(n^2)
const selectionSort = (list) => {
    if (list.length <= 1) return;

    const len = list.length;
    for (let i = 0; i < len - 1; ++i) {
        let min = i;
        for (let j = i + 1; j < len; ++j) {
            if (list[min] > list[j]) {
                min = j;
            }
        }
        const tmp = list[i];
        list[i] = list[min];
        list[min] = tmp;
    }
};

const list = [29, 3, 3, 12, 32, 4, 30, 88, 49, 99, 29];
selectionSort(list);
console.log(list);


// 二刷了下排序，有了一些新的体会。
//
// 冒泡、插入、选择排序都有一个共同点，将待排序数列分为已排序和未排序两部分。在未排序的部分中查找一个最值，放到已排序数列的恰当位置。
//
// 具体到代码层面，外层循环的变量用于分割已排序和未排序数，内层循环的变量用于在未排序数中查找。从思路上看，这三种算法其实是一样的，所以时间复杂度也相同。
//
// 这三种排序的实际复杂度依赖于待排序数列的有序度。

