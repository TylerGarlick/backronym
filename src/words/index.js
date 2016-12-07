export default class {
  
  constructor(collection) {
    this.collection = collection;
  }
  
  async find(predicate = {}) {
    return await this.collection.find(predicate);
  }
  
  async save(word = {}) {
    if (!word._id) {
      return await this.collection.insert(word);
    } else {
      return await this.collection.update({ _id: word._id }, { $set: word });
    }
  }
  
  async remove(id) {
    return await this.collection.remove({ _id: id });
  }
  
  async reset() {
    return await this.collection.remove({}, { multi: true });
  }
}

