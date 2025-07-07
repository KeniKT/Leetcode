class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
            currentNode.children.set(char, new TrieNode());
        }
        currentNode = currentNode.children.get(char);
    }
    currentNode.isEndOfWord = true;
};

Trie.prototype.search = function(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
            return false;
        }
        currentNode = currentNode.children.get(char);
    }
    return currentNode.isEndOfWord;
};

Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!currentNode.children.has(char)) {
            return false;
        }
        currentNode = currentNode.children.get(char);
    }
    return true;
};
