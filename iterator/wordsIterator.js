class WordsIterator {
  constructor(wordsCollection) {
    this.wordsCollection = wordsCollection
    this.currentPosition = 0
  }

  next() {
    let word
    switch(this.currentPosition) {
      case 0:
        word = this.wordsCollection.word1
        break
      case 1:
        word = this.wordsCollection.word2
        break
      case 2:
        word = this.wordsCollection.word3
        break
      case 3:
        word = this.wordsCollection.word4
        break
    }

    this.currentPosition += 1
    return word
  }

  hasMore() {
    if(this.currentPosition > 3) return false
    return true
  }
}

module.exports = WordsIterator