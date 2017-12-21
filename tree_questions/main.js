// Create a function to check if a Binary Search Tree 
// A BST is valied is left node is smaller than the right node
// valid      (2)        | invalid    (2)
//           /   \       |           /   \        
//          /     \      |          /     \      
//       (1)       (3)   |       (1)       (3)   
//      /   \            |      /   \            
//     /     \           |     /     \           
//  (0)       (3)        |  (2)       (3)        


function validateBST(tree) {
  console.log('This is tree: ', tree);
  if (tree.left === null && tree.right === null) return true;
  if (tree.left.value >= tree.value || tree.right.value <= tree.value) return false;
  return validateBST(tree.left) && validateBST(tree.right);
}

// Creat BTS instance with this class
function BTSTree (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
// let myTree = new BTSTree(2);
// myTree.left = new BTSTree(1);
// myTree.right = new BTSTree(3);
// myTree.left.left = new BTSTree(0);
// myTree.left.right = new BTSTree(3);

// console.log(validateBST(myTree));
