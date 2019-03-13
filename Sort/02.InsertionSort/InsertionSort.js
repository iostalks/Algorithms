// 原地，稳定，O(n^2)
const insertionSort = (list) => {
    const n = list.length;
    if (n <= 1) return;

    for (let i = 1; i < n; ++i) {
        const val = list[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (list[j] > val) {
                list[j+1] = list[j];
            } else {
                break;
            }
        }
        list[j+1] = val;
    }
}

const list = [3, 4, 39, 2, 12, 49, 32];
insertionSort(list);
console.log(list);
