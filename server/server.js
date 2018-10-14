const express = require('express');
const bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then( doc => {
    res.send(doc);
  }, e => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //findById
  Todo.findById(id).then( todo => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( err => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

/*let newTodo = new Todo({
  text: 'Cook Dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved Todo.', doc);
}, (err) => {
  console.log('Unable to save Todo');
});*/

/*let newUser = new User({
  email: '    something@somewhere.com     '
});

newUser.save().then((doc) => {
  console.log('Saved User: ', JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log(err);
});*/

module.exports = {
  app
};
