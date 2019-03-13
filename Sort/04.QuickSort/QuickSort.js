// 快速排序
// 不稳定
// 原地
const quickSort = (arr) => {
    const n = arr.length
    if (n <= 1) return;
    _quickSort(arr, 0, n-1);
}

const _quickSort = (arr, left, right) => {
    if (left >= right) return;
    const pivot = _patition(arr, left, right);
    _quickSort(arr, left, pivot - 1);
    _quickSort(arr, pivot + 1, right);
}

const _patition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; ++j) {
        if (arr[j] < pivot) {
            _swap(arr, i, j);
            ++i;
        }
    }
    _swap(arr, i, right);
    return i;
}

const _swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


const arr = [23, 3, 2, 12, 34, 23, 4, 32, 19, 39];
quickSort(arr);
console.log(arr);
