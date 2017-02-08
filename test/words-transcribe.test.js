import Test from 'ava';
import Words from '../src/words';

Test(`transcribe(acronym) exists`, t => t.truthy(Words.transcribe));

Test(`transcribe(acronym) acronym is required`, t => {
  const error = t.throws(() => {
    Words.transcribe();
  }, Error);
  t.is(error.message, 'Acronym is required');
});

Test(`transcribe(acronym) number of letters is equal to number of items in the array `, t => {
  const acronym = 'CIA';
  
  const words = Words.transcribe(acronym);
  console.log(words);
  t.is(words.length, acronym.length);
});

Test(`transcribe(acronym) words are in proper order from acronym`, t => {
  const acronym = 'IRS';
  
  const words = Words.transcribe(acronym);
  
  acronym.split('')
         .forEach((letter, index) => {
           const word = words[index];
           t.is(letter.toLowerCase(), word[0]);
         });
});
