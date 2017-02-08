import Test from 'ava';
import Formatter from '../src/formatter';

Test(`#convert(words) convert an array to a string`, t => {
  t.is(Formatter.buildSentenceFromArray(['Hello', 'World']), 'Hello World');
});

Test(`#convert(words) can have additional separators`, t => {
  t.is(Formatter.buildSentenceFromArray(['Hello', 'World'], '-'), 'Hello-World');
});

Test(`#convert(words) is empty when the array is empty`, t => {
  t.is(Formatter.buildSentenceFromArray(), '');
});

Test(`#capitalize(word) makes the word title cased`, t => {
  t.is(Formatter.capitalize('bogus'), 'Bogus');
});



