function HashTable(size) {
  this.buckets = Array(size);
  // this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  let sum = 0;
  for(let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  let bucket = sum % this.buckets.length;
  return bucket;
};

HashTable.prototype.insert = function(key, value) {
  let node = new HashNode(key, value);

  let index = this.hash(key);
  if(!this.buckets[index]) this.buckets[index] = node
  else {
    let currentNode = this.buckets[index];
    while(currentNode) {
      if(currentNode.key === key) {
        currentNode.value = value
        return;
      }
      else if(!currentNode.next) {
        currentNode.next = node;
        return;
      }
      currentNode = currentNode.next;
    }
  }
};

// other way
// HashTable.prototype.insert = function(key, value) {
//   var index = this.hash(key);
//   if (!this.buckets[index]) {
//     this.buckets[index] = new HashNode(key, value);
//   }
//   else if (this.buckets[index].key === key) {
//     this.buckets[index].value = value;
//   }
//   else {
//     var currentNode = this.buckets[index];
//     while (currentNode.next) {
//       if (currentNode.next.key === key) {
//         currentNode.next.value = value;
//         return;
//       }
//       currentNode = currentNode.next;
//     }
//     currentNode.next = new HashNode(key, value);
//   }
// };

HashTable.prototype.get = function(key) {
  let index = this.hash(key);

  let currentNode = this.buckets[index];

  while(currentNode) {
    if(currentNode.key === key) return currentNode.value;
    currentNode = currentNode.next;
  }

  return null;
};

// other way
// HashTable.prototype.get = function(key) {
//   var index = this.hash(key);
//   if (!this.buckets[index]) return null;
//   else {
//     var currentNode = this.buckets[index];
//     while (currentNode) {
//       if (currentNode.key === key) return currentNode.value;
//       currentNode = currentNode.next;
//     }
//     return null;
//   }
// };

HashTable.prototype.retrieveAll = function() {
  let result = [];
  for(let i = 0; i < this.buckets.length; i++) {
    let currentNode = this.buckets[i];
    while(currentNode) {
      result.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return result
};

var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
