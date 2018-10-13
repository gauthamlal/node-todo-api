const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} ,(err, client) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // findOneAndUpdate
  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bc1748762c5cf8646b07de8')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then( result => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bc0e8e762c5cf8646b07c39')
  },{
    $set: {
      name: 'Gautham'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

  // client.close();
});
