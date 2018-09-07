var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.cnt = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.cnt] = value;
  this.cnt++;
}

Stack.prototype.pop = function() {
  if(this.cnt > 0) {
    let popped = this.storage[this.cnt - 1];
    delete this.storage[this.cnt - 1];
    this.cnt--;
    return popped;
  }
  return;
}

Stack.prototype.size = function() {
  return this.cnt;
}



let stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');
stack.pop();
stack.pop();
console.log(stack.storage)
