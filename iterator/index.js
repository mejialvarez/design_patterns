const WordsCollection = require('./wordsCollection')

let wordsCollection = new WordsCollection()
wordsCollection.set(0, 'A')
wordsCollection.set(1, 'B')
wordsCollection.set(2, 'C')
wordsCollection.set(3, 'D')

let iterator = wordsCollection.getIterator()

while(iterator.hasMore()) {
  console.log(iterator.next())
}