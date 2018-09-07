var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    let key = this.size();

    storage[key] = value;

    return storage;
  };

  someInstance.pop = function(){
    let key = this.size() - 1;
    let poppedVal = storage[key];
    delete storage[key];
    return poppedVal;
  };

  someInstance.size = function(){
    let i = 0;
    for(let key in storage) i++;
    return i;
  };

  return someInstance;
}

let stack = Stack();
stack.push('a')
stack.push('b')
stack.push('c')
stack.pop();
stack.size();
