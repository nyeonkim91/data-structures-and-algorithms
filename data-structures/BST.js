function BST (value) {
}

BST.prototype.insert = function(value) {
}

BST.prototype.contains = function(value) {
}

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
}

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
}

BST.prototype.getMinVal = function() {
}

BST.prototype.getMaxVal = function() {
}

// function log(value) {
//   console.log(value);
// };

// function log(node) {
//   console.log(node.value);
// }

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


bst.breadthFirstTraversal(log);
