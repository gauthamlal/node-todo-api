const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then( result => {
  console.log(result);
});*/

// Todo.findOneAndRemove({})

/*Todo.findOneAndRemove({_id:'5bc325b762c5cf8646b0983e'}).then( todo => {

});*/

Todo.findByIdAndRemove('5bc3290462c5cf8646b09925').then( todo => {
  console.log(todo);
});
