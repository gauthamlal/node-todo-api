const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} ,(err, client) => {
  if (err) {
    return console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  /*db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=> {
    console.log(result);
  });*/

  // deleteOne
  /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
    console.log(result);
  });*/

  //findOneAndDelete
  /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });*/

  // deleteMany
  /*db.collection('Users').deleteMany({name: 'Gautham Lal'}).then((result)=> {
    console.log(result);
  });*/

  // deleteOne
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5bc17f3562c5cf8646b07fb9')}).then((result)=> {
    console.log(result);
  });


  // client.close();
});
