const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} ,(err, client) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  /*db.collection('Todos').find({
    _id: new ObjectID('5bc0e53f62c5cf8646b07b14')
  }).toArray()
    .then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
      console.log('Unable to feth todos', err);
    });*/

    /*db.collection('Todos').find().count()
      .then((count) => {
        console.log(`Todos count: ${count}`);
      }, err => {
        console.log('Unable to feth todos', err);
      });*/

      db.collection('Users').find({name: "Gautham Lal"}).toArray()
        .then((docs) => {
          console.log(JSON.stringify(docs, undefined, 2));
        }, err => {
          console.log('Unable to feth Users', err);
        });

  // client.close();
});
