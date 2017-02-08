import Words from 'an-array-of-english-words';

//'Letter is required'

const random = length => Math.floor(Math.random() * length);

export default {
  find(letter = '') {
    if (!letter || letter.length !== 1) throw Error('One letter is required');
    
    const filteredWords = Words.filter(word => word.startsWith(letter.toLowerCase()))
                               .map(word => word.replace(/\b[a-z]/g, c => c.toUpperCase()));
    
    const index = random(filteredWords.length);
    return filteredWords[index];
  }
}
