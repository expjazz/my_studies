const pathSum = (root) => {
    if (!root) return false;
    if (root.val === sum && !root.right && !root.left) {
        return true
    }
    
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}