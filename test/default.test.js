import Test from 'ava';
import Backronym from '../src';


Test('#create(acronym) is exposed', t => t.truthy(Backronym.create));

Test('#create(acronym) is a required parameter', t => {
  const error = t.throws(() => {
    Backronym.create();
  }, Error);
  
  t.is(error.message, 'Acronym is required');
});

Test('#create(acronym) returns the result', t => t.truthy(Backronym.create('IRS')));

console.log(Backronym.create('CIA'));
