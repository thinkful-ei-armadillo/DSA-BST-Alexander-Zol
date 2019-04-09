const binary = require('./bst');

// tree() function recursivly prints out the binary tree data.
function tree(t){
  if(!t){
    return 0;
  }
  return ' '+ tree(t.left) + t.value + tree(t.right) + ' ';
}

function BstHeight(tree){
  if(!tree){
    return 0;
  }
  let lengthL = BstHeight(tree.left);
  let lengthR = BstHeight(tree.right);
    
  return 1 + Math.max(lengthL, lengthR);
}


function main(){
  const BST = new binary();
  const data = [3,1,4,6,9,2,5,7];
  // const data = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

  data.forEach(num => {
    BST.insert(num, num);
  });

  data.forEach(key => {
    // console.log(BST.find(key))
  });

  console.log(BstHeight(BST));
}

// main();

function isBST(t, min = null, max = null) {
  if (t === null) {
    return true;
  }
  console.log(t.key, min, max);

  if ((max && t.key > max) || (min && t.key < min)) {
    return false;
  }

  return (
    isBST(t.left, min, t.key) &&
    isBST(t.right, t.key, max)
  );
}

function thirdLargestNode(t, parent = null) {
  const rightRight = t.right.right;
  if (t.right.right === null && t.right.left) {
    return t.key;
  } else if (t.right.right === null && t.left) {
    return t.left.key;
  } else if (t.right.right === null && !t.left) {
    return parent.key;
  }
  return thirdLargestNode(t.right, t);
}

// testThirdLargestNode();
function maintest(arr1, arr2) {
  // let data = [5, 4, 6, 3, 1, 0, 2];
  // [3, 1, 5, 2, 4, 6, 0]
  const sort = (a,b) => {
    return a - b;
  };
  return arr1.sort(sort).join('') === arr2.sort(sort).join('');
}

console.log(maintest([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));

//time complexity is O(n log n). Unsure if there's a better solution. Need to compare the inorder traversals of the 'trees' to compare them, to do
//that we have to sort the arrays. Sort has a time complexity of (n log n) we're doing two sorts and two joins (which are o(n))