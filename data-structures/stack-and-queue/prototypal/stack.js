var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stackSample = Object.create(stackMethods);
  stackSample.cnt = 0;
  stackSample.storage = {};
  return stackSample;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.cnt] = value;
  this.cnt++;
}

stackMethods.pop = function() {
  if(this.cnt > 0) {
    let popped = this.storage[this.cnt - 1];
    delete this.storage[this.cnt - 1];
    this.cnt--;
    return popped;
  }
  return;
}

stackMethods.size = function() {
  return this.cnt;
}

let stack = Stack();
stack.push('a')
stack.push('b')
stack.push('c')
stack.pop();
stack.size();
console.log(stack.storage);
