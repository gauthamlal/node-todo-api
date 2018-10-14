const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*let id = "5bc2d8d9a9cf5338b81e06d0777";

if (!ObjectID.isValid()) {
  console.log('ID not valid');
}*/

/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos:', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo:', todo);
});*/

/*Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  console.log('Todo by ID:', todo);
}).catch( err => console.log(err));*/

let id = '5bc198903c9f2526f8147832';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('No user found');
  }
  console.log(user);
}).catch( err => console.log(err));
