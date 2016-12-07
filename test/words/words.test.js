import Test from 'ava';
import Storage from '../../src/storage';
import Words from '../../src/words';

Test.beforeEach(t => {
  const words = Storage.generate({ inMemoryOnly: true });
  t.context.wordsService = new Words(words);
});

Test('retrieves find the words', async t => {
  const { wordsService } = t.context;
  const words = await wordsService.find();
  t.is(words.length, 0);
});

Test('saves a word', async t => {
  const { wordsService } = t.context;
  const word = { text: 'hello', isBlackList: false, isActive: true };
  await wordsService.save(word);
  
  const words = await wordsService.find();
  t.is(words.length, 1);
});

Test('updates a word', async t => {
  const { wordsService } = t.context;
  const word = { text: 'hello', isBlackList: false, isActive: true };
  const result = await wordsService.save(word);
  result.text = 'hello2';
  
  await wordsService.save(result);
  
  const words = await wordsService.find();
  t.is(words[0].text, 'hello2');
});

Test('removes a word', async t => {
  const { wordsService } = t.context;
  const word = { text: 'hello', isBlackList: false, isActive: true };
  const result = await wordsService.save(word);
  
  await wordsService.remove(result._id);
  
  const words = await wordsService.find();
  t.is(words.length, 0);
});

Test('resets the words', async t => {
  const { wordsService } = t.context;
  const word = { text: 'hello', isBlackList: false, isActive: true };
  
  await wordsService.save(word);
  await wordsService.reset();
  
  const words = await wordsService.find();
  t.is(words.length, 0);
});