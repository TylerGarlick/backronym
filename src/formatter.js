export default {
  
  buildSentenceFromArray(words = [], separator = ' ') {
    return words.join(separator);
  },
  
  capitalize(word = ''){
    return word.replace(/\b[a-z]/g, c => c.toUpperCase());
  }
}
