function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value);

  if(!this.head) this.tail = node;
  else this.head.prev = node;
  this.head = node;
}

LinkedList.prototype.addTotTail = function(value) {
  let node = Node(value, null, this.tail);

  if(!this.tail) this.head = node
  else this.tail.next = node
  this.tail = node;
}

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;

  let removed = this.head.value;
  this.head = this.head.next;
  if(!this.head) this.tail = null;
  this.head.prev = null;

  return removed
}

LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;

  let removed = this.tail.value;
  this.tail = this.tail.prev;

  if(!this.tail) this.head = null;
  this.tail.next = null;

  return removed;
}

LinkedList.prototype.search = function(searchValue) {
  let node = this.head;
  while(node) {
    if(node.value === value) return node.value;
    node = node.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function(value) {
  let node = this.head;
  let indexes = [];
  let index = 0;

  while(node) {
    if(node.value === value) indexes.push(index)
    node = node.next;
    index++;
  }
  return indexes;
}

let myLL = new LinkedList();

myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);
