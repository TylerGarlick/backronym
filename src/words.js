import Words from 'an-array-of-english-words';

const random = length => Math.floor(Math.random() * length);

export default {
  
  transcribe(acronym = '') {
    if(!acronym) throw Error('Acronym is required');
  
    return acronym.split('')
                  .map(letter => this.find(letter));
  },
  
  find(letter = '') {
    if (!letter || letter.length !== 1) throw Error('One letter is required');
    
    const filteredWords = Words.filter(word => word.startsWith(letter.toLowerCase()));
    const index = random(filteredWords.length);
    return filteredWords[index];
  }
  
}
