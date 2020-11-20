# Trie

**Trie** 又名 *前缀树，单词搜索树，字典树*，与我们的N叉树是一样的结构的。

## Trie 实现方式一

```javascript
class TrieNode {
  constructor(val = null) {
    this.val = val;
    this.children = [];
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let root = this.root;
    for (let char of word.split('')) {
      if (!root.children[char]) {
        root.children[char] = new TrieNode(char);
      }
      root = root.children[char];
    }
    root.isEnd = true;
  }

  search(word) {
    let root = this.find(word);
    return root && root.isEnd ? true : false;
  }

  startWith(prefix) {
    let root = this.find(prefix);
    return !!root;
  }

  find(word) {
    let root = this.root;
    for (let char of word.split('')) {
      if (!root.children[char]) {
        return null;
      }
      root = root.children[char];
    }
    return root;
  }
}
```

## Trie 实现方式二

```javascript
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let obj = this.root;
    for (let i = 0; i < word.length; i++) {
      let c = word[i];
      if (!obj[c]) {
        obj[c] = {};
      }
      obj = obj[c];
    }
    obj.isEnd = true;
  }

  search(word) {
    let obj = this.commonSearch(word);
    return obj && obj.isEnd ? true : false;
  }

  startsWith(prefix) {
    let obj = this.commonSearch(prefix);
    return !!obj;
  }

  commonSearch(word) {
    let obj = this.root;
    for (let char of word.split('')) {
      if (!obj[char]) {
        return null;
      } else {
        obj = obj[char];
      }
    }
    return obj;
  }
}
```
