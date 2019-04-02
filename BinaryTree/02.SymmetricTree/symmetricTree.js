/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 对称树
function isSymmetricHelper(left, right) {
    if (!left || !right) {
        return left == right;
    }

    if (left.val !== right.val) {
        return false
    }

    return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}

var isSymmetric = function(root) {
    if (!root) return true;
    return isSymmetricHelper(root.left, root.right);
};


// 对于树形结构，如果直接递归行不通，考虑拆分为左右子树来递归。
