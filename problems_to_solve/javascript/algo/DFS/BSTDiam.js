var diameterOfBinaryTree = function(root) {
    let treeDiam = [0]
    helper(root, treeDiam)
    return treeDiam
};

function helper(root, treeDiam) {
    if (!root) {
        return 0;
    }
    
    const left = helper(root.left, treeDiam);
    const right = helper(root.right, treeDiam);
    treeDiam[0] = Math.max(treeDiam, (left + right))
    return Math.max(left, right) + 1

}