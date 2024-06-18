class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (let ch of word) {
    if (!(ch in curr.children)) curr.children[ch] = new TrieNode();
    curr = curr.children[ch];
  }
  curr.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curr = this.root;
  for (let ch of word) {
    if (!(ch in curr.children)) return false;
    curr = curr.children[ch];
  }
  return curr.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curr = this.root;
  for (let ch of prefix) {
    if (!(ch in curr.children)) return false;
    curr = curr.children[ch];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
