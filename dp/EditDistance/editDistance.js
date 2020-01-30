function min(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c
    }
    return min;
}

var minDistance2 = function(word1, word2) {
    const m = word1.length + 1, n = word2.length + 1;
    const minDist = [];
    const row0 = []
    // 填充第一行数据
    for (let j = 0; j < n; ++j) {
        row0.push(j);
    }
    minDist.push(row0);
    // 创建 1~m 个数组，填充第一个元素
    // 也就是二维数组的第一列
    for (let i = 1; i < m; ++i) {
        let row = [];
        row[0] = i;
        minDist.push(row);
    }
    // 最小值填表
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            if (word1[i-1] == word2[j-1]) {
                minDist[i][j] = min(minDist[i-1][j-1], minDist[i][j-1] + 1, minDist[i-1][j] + 1);
            } else {
                minDist[i][j] = min(minDist[i-1][j-1] + 1, minDist[i][j-1] + 1, minDist[i-1][j] + 1);
            }
        }
    }

    return minDist[m-1][n-1];
}

