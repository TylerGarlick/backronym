import Test from 'ava';
import Initialism from '../src';


Test('#convert(acronym) is exposed', t => t.truthy(Initialism.convert));

Test('#convert(acronym) is a required parameter', t => {
  const error = t.throws(() => {
    Initialism.convert();
  }, Error);
  
  t.is(error.message, 'Acronym is required');
});

Test('#convert(acronym) returns the result', t => t.truthy(Initialism.convert('IRS')));

