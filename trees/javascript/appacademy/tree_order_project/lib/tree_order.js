function inOrderArray(root) {
  let temp = [];
  let res = "";
  if (root === null) {
    return temp;
  } else if (root.left === null && root.right === null) {
    return root.val;
  } else {
    res = inOrderArray(root.left);
    res += root.val;
    res += inOrderArray(root.right);
  }
  return res;
}

function postOrderArray(root) {
  let temp = [];
  let res = "";
  if (root === null) {
    return temp;
  } else if (root.left === null && root.right === null) {
    return root.val;
  } else {
    res = postOrderArray(root.left);
    res += postOrderArray(root.right);
    res += root.val;
  }
  return res;
}

module.exports = {
  inOrderArray,
  postOrderArray,
};
