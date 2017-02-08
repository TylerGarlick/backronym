import Words from './words';
import Formatter from './formatter';


export default {
  
  create(acronym = '', options = {}){
    if (!acronym) throw Error('Acronym is required');
    
    const words = Words.transcribe(acronym).map(word => Formatter.capitalize(word));
    return Formatter.buildSentenceFromArray(words);
  }
  
};
