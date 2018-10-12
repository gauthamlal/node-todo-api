// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} ,(err, client) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  /*db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Todo', err);;
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });*/

  /*db.collection('Users').insertOne({
    name: 'Gautham Lal',
    age: 22,
    location: 'Bangalore'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Users', err);;
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });*/

  client.close();
});
