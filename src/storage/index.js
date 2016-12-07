import Db from 'nedb-promise';

const defaults = { autoload: true };

const words = new Db(defaults);

export default {
  words,
  
  generate(configuration = {}){
    const options = Object.assign(defaults, configuration);
    return new Db(options);
  }
};
