var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


  var queueInstance = Object.create(queueMethods);
  queueInstance.cnt = 0;
  queueInstance.storage = {};
  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.cnt] = value;
  this.cnt++;
};

queueMethods.dequeue = function(){
  if(this.cnt > 0) {
    let dequeued = this.storage[0];
    delete this.storage[0];

    for(let i = 1; i < this.cnt - 1; i++) {
      this.storage[i - 1] = this.storage[i];
    }

    delete this.storage[this.cnt - 1];
    this.cnt--;
    return dequeued;
  }
  return;
};

queueMethods.size = function(){
  return this.cnt;
};

let queue = Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.dequeue();
queue.enqueue('a');
console.log(queue)
