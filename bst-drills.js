const binary = require('./bst')

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
    })

    data.forEach(key => {
        // console.log(BST.find(key))
    })

    console.log(BstHeight(BST));
}

main();

