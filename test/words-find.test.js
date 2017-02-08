import Test from 'ava';
import Words from '../src/words';

Test('#find(letter) is exported', t => t.truthy(Words.find));

Test('#find(letter) a letter is required', t => {
  const error = t.throws(() => {
    Words.find();
  }, Error);
  t.is(error.message, 'One letter is required');
});

Test('#find(letter) single letter is required', t => {
  const error = t.throws(() => {
    Words.find('aa');
  }, Error);
  t.is(error.message, 'One letter is required');
});

Test('#find(letter) returns a word that starts with the letter', t => {
  const letter = 'B';
  const word = Words.find(letter);
  t.truthy(word);
  t.truthy(word[0] === letter.toLowerCase());
});

Test('#find(letter) returns a random word', t => {
  const letter = 'b';
  const firstWord = Words.find(letter);
  const secondWord = Words.find(letter);
  t.truthy(firstWord !== secondWord);
});
