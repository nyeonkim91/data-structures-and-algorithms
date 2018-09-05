function BST (value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BST.prototype.insert = function(value) {
  let node = new BST(value);

  if(this.value >= value) {
    if(this.left) this.left.insert(value)
    else this.left = node
  } else {
    if(this.right) this.right.insert(value)
    else this.right = node
  }
}

BST.prototype.contains = function(value) {
  if(this.value === value) return true;

  if(this.value > value) {
    if(!this.left) return false;
    else return this.left.contains(value);
  } else {
    if(!this.right) return false;
    else return this.right.cotains(value);
  }

  return false;
}

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if(order === 'pre-order') iteratorFunc(this.value)
  if(!this.left) this.left.depthFirstTraversal(iteratorFunc, order)
  if(order === 'order') iteratorFunc(this.value)
  if(!this.right) this.right.depthFirstTraversal(iteratorFunc, order)
  if(order === 'post-order') iteratorFunc(this.value)
}

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  // 가로줄 순으로 적용하려면 위에서 내려오면서 가로순으로 push 시키고 shift() 하여 처리해주면 된다
  let queue = [this];

  while(queue.length) {
    let node = queue.shift();
    iteratorFunc(node);
    if(!node.left) queue.push(node.left)
    if(!node.right) queue.push(node.right)
  }
}

BST.prototype.getMinVal = function() {
  if(!this.left) return this.value
  else return this.left.getMinVal()
}

BST.prototype.getMaxVal = function() {
  if(!this.right) return this.value
  else return this.right.getMaxVal()
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
