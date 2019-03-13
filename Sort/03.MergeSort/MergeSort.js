// 归并排序
// time: O(nlog(n))
// space: O(n)
// 非原地排序
// 稳定排序

const mergeSort = (list) => {
    if (list.length <= 1) return list;
    const middle = list.length / 2;
    const left = list.slice(0, middle);
    const right = list.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftList, rightList) => {
    let tmpList = []; leftIndex = 0; rightIndex = 0;
    while (leftIndex < leftList.length && rightIndex < rightList.length) {
        if (leftList[leftIndex] <= rightList[rightIndex]) { // 取 = 确定是稳定的排序
            tmpList.push(leftList[leftIndex]);
            leftIndex++;
        } else {
            tmpList.push(rightList[rightIndex]);
            rightIndex++;
        }
    }
    return tmpList.concat(leftList.slice(leftIndex).concat(rightList.slice(rightIndex)));
}


const list = [3, 4, 40, 23, 12, 4, 12, 4, 32, 1234, 23];
const r = mergeSort(list);
console.log(r);

// 排序的思路虽然一样，但是受语言的影响，实现形式看起来差别还是挺大的
// 最好不要修改入参
