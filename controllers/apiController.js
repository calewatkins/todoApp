//grab the Todos model 
const Todos = require('../models/todoModel');

module.exports = {

  findByUser: (req, res) => {
    Todos.find({username: req.params.username })
      .then((todos) => res.send(todos))
      .catch(err => console.error(err));
  },

  findById: (req, res) => {
    Todos.findById({ _id: req.params.id })
    .then((todo) => res.send(todo))
    .catch(err => console.error(err));
  },

  create: (req, res) => {
    const newTodo = Todos({
      username: 'test',
      todo: req.body.todo,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment
    });
    //now save the new document
    newTodo.save()
    .then(res.send('Successfully created new record'))
    .catch(err => console.err(err));
  },
  update: (req, res) => {
    Todos.findByIdAndUpdate(req.body.id, {
      todo: req.body.todo,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment})
    .then(res.send('Successfully updated'))
    .catch(err => console.error(err));
  },
  delete: (req, res) => {
    Todos.findByIdAndRemove(req.body.id)
    .then(res.send('Successfully deleted'))
    .catch(err => console.error(err)); 
  }

};//end of export function