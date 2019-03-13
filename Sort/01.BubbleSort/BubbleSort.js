// 原地，稳定，O(n^2)
const bubbleSort = (list) => {
    const n = list.length;
    if (n <= 1) return;

    for (let i = 0; i < n; ++i) {
        let flag = false; // 如果没有进行交换 说明已排序完毕
        for (let j = 0; j < n - i - 1; ++j) {
            if (list[j] > list[j + 1]) {
                const tmp = list[j];
                list[j] = list[j+1];
                list[j+1] = tmp;
                flag = true;
            }
        }
        if (!flag) break;
    }
};

const list = [10, 13, 41, 25, 40, 5, 6];
bubbleSort(list);
console.log(list);
