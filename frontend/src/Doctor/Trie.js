function TrieNode(key) {
  //TrieNode class using function
  this.key = key; //value
  this.parent = null; //parent of root is null
  this.children = {}; //key value pairs key- character and value - TrieNode
  this.end = false; //indicate end of word
}

TrieNode.prototype.getWord = function () {
  //get entire word from trie using last character's Node of word
  var output = []; //characters array
  var node = this;

  while (node !== null) {
    //if parent of root is not reached
    output.unshift(node.key); //add character to front of output array
    node = node.parent; //go to parent
  }

  return output.join(""); //return word as string
};

export default function Trie() {
  this.root = new TrieNode(""); //root is empty string
}

Trie.prototype.insert = function (word) {
  //insert a word in trie
  var node = this.root; //root is empty string

  for (var i = 0; i < word.length; i++) {
    //traverse character by character
    if (!node.children[word[i]]) {
      //if character is not present in trie
      node.children[word[i]] = new TrieNode(word[i]); //insert character node
      node.children[word[i]].parent = node; //set parent of newNode as previous node. root ("") as parent for first time
    }

    node = node.children[word[i]]; //update parent to newNode

    if (i === word.length - 1) {
      node.end = true; //end node of last character in word
    }
  }
};

Trie.prototype.find = function (prefix) {
  //return suggestions array
  var node = this.root;
  var output = [];

  //find prefix's last matching character node
  for (var i = 0; i < prefix.length; i++) {
    //character found in children object
    if (node.children[prefix[i]]) {
      node = node.children[prefix[i]]; //set current node to matching character's TrieNode that is value
    } else {
      //word not found return empty suggestions array
      return output;
    }
  }

  findAllWords(node, output); //pass last character's Node and output array is passed as reference

  return output; //return suggestions
};

function findAllWords(node, arr) {
  if (node.end) {
    //if final node of word is there
    arr.unshift(node.getWord()); //get whole word and add to front of suggestions array
  }
  for (var child in node.children) {
    //prefix is starting part of word
    findAllWords(node.children[child], arr); //recursively call for all children nodes
  }
}
