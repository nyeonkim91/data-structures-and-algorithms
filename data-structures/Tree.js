var Tree = function(value){
  let newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  let flag = false;

  function compareTarget(node, target) {
    if(node.value === target) flag = true;
    else {
      for(let i = 0; i < node.children.length; i++) {
        compareTarget(node.children[i], target);
      }
    }
    return flag;
  }

  return compareTarget(this, target);
};

/*
 * Complexity: What is the time complexity of the above functions?
addChild - O(1)
contains - O(n)
 */

const newTree = Tree('a');

newTree.addChild('b');
newTree.addChild('c');
newTree.addChild('d');
console.log(newTree.contains('a'));
