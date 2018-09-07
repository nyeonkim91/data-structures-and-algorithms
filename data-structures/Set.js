var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this._storage[item]) this._storage[item] = 0
  this._storage[item]++;
};

setPrototype.contains = function(item){
  if(this._storage[item]) return true;
  return false;
};

setPrototype.remove = function(item){
  if(this._storage[item]) delete this._storage[item];
};

let newSet = Set();
newSet.add(1);
newSet.add(1);
newSet.add(5);
newSet.add(5);
newSet.add(5);
newSet.add(1);
newSet.add(1);
newSet.remove(5);
console.log(newSet);

/*
 * Complexity: What is the time complexity of the above functions? O
 */
