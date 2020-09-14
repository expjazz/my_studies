function BST(root) {
  if (!root) return []
  const queue = [root]
  const r = []
  while (queue.length > 0) {
      const level = [];
      let levelC = queue.length;
      for (let i = 0; i < levelC; i++) {
          const node =  queue.pop();
          level.push(node.val);
          if (node.left) queue.unshift(node.left)
          if(node.right) queue.unshift(node.right)
      }
      r.unshift(level)
  }
  return r
}