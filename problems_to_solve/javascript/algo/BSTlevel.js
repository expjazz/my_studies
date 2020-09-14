function BST(root) {
    if (!root) return []
    const queue = [root];
    const r = [];
    while (queue.length > 0) {
        const level = queue.length;
        let levelArr = [];
        for (let i = 0; i < level; i++) {
            const node = queue.pop();
            levelArr.push(node.val);
            if (node.left) queue.unshift(node.left)
            if (node.right) queue.unshift(node.right)
        }
        r.push(levelArr)
        
        
    }
    return r
}