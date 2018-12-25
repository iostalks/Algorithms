class Solution(object):
    def solveNQueens(self, n):
        self.res = []
        nQueens = ['.' * n for b in range(n)]
        self.dfs(nQueens, 0, n)
        return self.res

    def dfs(self, nQueens, row, n):
        if (row == n):
            self.res.append(list(nQueens))
            return;
        for col in range(n):
            if self.isValid(nQueens, row, col, n):
                # 放 Q
                strList = list(nQueens[row]) # 现将字符串转为 list，再修改
                strList[col] = 'Q'
                nQueens[row] = ''.join(strList)
                self.dfs(nQueens, row+1, n)
                # 结束后，恢复 .
                strList[col] = '.'
                nQueens[row] = ''.join(strList)

    def isValid(self, nQueens, row, col, n):
        leftup = col - 1;
        rightup = col + 1
        for i in range(row-1, -1, -1): # row-1 to 0
            if (nQueens[i][col] == 'Q'):
                return False
            if (leftup >= 0):
                if (nQueens[i][leftup] == 'Q'):
                    return False
            if (rightup < n):
                if (nQueens[i][rightup] == 'Q'):
                    return False
            leftup -= 1
            rightup += 1

        return True

s = Solution()
r = s.solveNQueens(4)
print('result', r)

