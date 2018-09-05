function HashTable(size) {
}

function HashNode(key, value, next) {
}

HashTable.prototype.hash = function(key) {
};

HashTable.prototype.insert = function(key, value) {
};

HashTable.prototype.get = function(key) {
};

HashTable.prototype.retrieveAll = function() {
};

var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
