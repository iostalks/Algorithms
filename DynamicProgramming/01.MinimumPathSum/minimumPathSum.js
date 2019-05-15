var minPath = (grid) => {
    let states = []
    const m = grid.length;
    const n = grid[0].length;

    // 初始化第一行的数据
    let row = []
    let sum = 0
    for (let j = 0; j < n; ++j) {
        sum += grid[0][j];
        row[j] = sum;
    }
    states.push(row);

    // 初始化第一列的数据
    sum = grid[0][0];
    for (let i = 1; i < m; ++i) {
        let row = [];
        sum += grid[i][0];
        row[0] = sum;
        states.push(row);
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
           states[i][j] = grid[i][j] + Math.min(states[i-1][j], states[i][j-1]);
        }
    }

    return states[m-1][n-1];
}

