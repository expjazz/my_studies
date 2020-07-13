function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var generateTrees = function (n) {
  if (n === 0) return [];
  return helper(1, n);
};

const helper = (start, end) => {
  const result = [];
  if (start > end) return [null];

  for (let i = start; i <= end; i++) {
    let left = helper(start, i - 1);
    let right = helper(i + 1, end);
    for (let j = 0; j < left.length; j++) {
      for (let x = 0; x < right.length; x++) {
        let node = new TreeNode(i);
        node.left = left[j];
        node.right = right[x];
        result.push(node);
      }
    }
  }
  return result;
};

console.log(generateTrees(3));

