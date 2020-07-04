function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const buildTree = function (preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) {
    return null;
  }
  let root = new TreeNode(preorder[0]);

  let inIndex = inorder.findIndex((ele) => ele === preorder[0]);
  let inBefore = inorder.slice(0, inIndex);
  let inAfter = inorder.slice(inIndex + 1);
  root.left = buildTree(preorder.slice(1, inBefore.length + 1), inBefore);
  root.right = buildTree(preorder.slice(inBefore.length + 1), inAfter);

  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

// let beforeIndex = preorder.findIndex((ele) => ele === preorder[0]);
// before = preorder.slice(0, beforeIndex);
// after = preorder.slice(beforeIndex + 1);
