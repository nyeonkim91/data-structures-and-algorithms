var Queue = function(){
  var someInstance = {};

  let cnt = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[cnt] = value;
    cnt++;
  };

  someInstance.dequeue = function(){
    if(cnt > 0) {
      let dequeueVal = storage[0];
      delete storage[0];

      for(let i = 1; i < cnt; i++) {
        storage[i - 1] = storage[i];
      }

      delete storage[cnt - 1];

      cnt--;

      return dequeueVal;
    }
  };

  someInstance.size = function(){
    return cnt;
  };

  return someInstance;
};

let newQ = Queue();
newQ.enqueue('a');
newQ.enqueue('b');
newQ.enqueue('c');
newQ.enqueue('d');
newQ.dequeue();
newQ.enqueue('a');
