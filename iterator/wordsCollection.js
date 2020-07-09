const WordsIterator = require('./wordsIterator')

class WordsCollection {
  constructor() {
    this.word1 = ""
    this.word2 = ""
    this.word3 = ""
    this.word4 = ""
  }

  getCount() {
    return 4
  }

  set(index, word) {
    switch(index) {
      case 0:
        this.word1 = word
        break;
      case 1:
        this.word2 = word
        break;
      case 2:
        this.word3 = word
        break;
      case 3:
        this.word4 = word
        break;
    } 
  }

  getIterator() {
    return new WordsIterator(this)
  }
}

module.exports = WordsCollection