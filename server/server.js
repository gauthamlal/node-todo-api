require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');

let app = express();
const port = process.env.PORT;

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
  })
  .catch( err => {
    res.send();
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then( todo => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( err => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then( todo => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch( err => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let {text, completed} = req.body;
  let body = {text, completed};

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (typeof body.completed === 'boolean' && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then( todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch (e => {
      res.status(400).send();
    });
});

app.post('/users', (req, res) => {
  const {email, password} = req.body;
  let user = new User({email, password});
  user.save().then(() => {
    return user.generateAuthToken();
  }).then( token => {
    res.header('x-auth', token).send(user);
  }).catch( e => {
    res.status(400).send(e);
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
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
