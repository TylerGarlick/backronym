# Backronym

> Generate sayings from acronyms

What is a backronym? https://en.wikipedia.org/wiki/Backronym

## Installation

Use npm/yarn to install

```bash
npm install backronym --save
```

### Usage

```js
import Backronym from 'backronym';

const result = Backronym.create('CIA');
// result = 'Cinematography Irruptively Altered';
```

### Road Map

* Uses all english words (sometimes complicated) need to refine the list of words
* Restrict bad words
* Add the ability to use our own words
* Spanish friendly
* Additional intelligence with the words (building better sentences)
* Replace word package with: https://github.com/moos/wordpos
