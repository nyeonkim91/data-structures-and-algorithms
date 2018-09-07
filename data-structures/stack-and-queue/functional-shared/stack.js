var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // extend...
  let stackInstance = Object.assign({}, stackMethods);

  stackInstance.cnt = 0;
  stackInstance.storage = {};

  return stackInstance;
};

var stackMethods = {
  'push': function(value) {
    this.storage[this.cnt] = value;
    this.cnt++;
  },
  'pop': function() {
    if(this.cnt > 0) {
      let popped = this.storage[this.cnt - 1];
      delete this.storage[this.cnt - 1];
      this.cnt--;
      return popped;
    }
  },
  'size': function() {
    return this.cnt;
  }
};

let stack = Stack();
stack.push('a')
stack.push('b')
stack.push('c')
stack.pop();
stack.size();
console.log(stack.storage);
