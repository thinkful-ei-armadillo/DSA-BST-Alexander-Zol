function sortedArrayToBST(arr, start = 0, end = length -1) {
  if (start > end) {
    return;
  }

  let middle = Math.floor((start+end)/2);
  let bst = new _Node(arr[middle]);

  bst.left = sortedArrayToBST(arr, start, middle-1);
  bst.right = sortedArrayToBST(arr, middle+1, end);
}