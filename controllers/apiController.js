//grab the Todos model 
const Todos = require('../models/todoModel');
//grab bodyparser to work with the body of a http request
const bodyparser = require('body-parser');

module.exports = (app) => {
  //middleware to parse out json form http body
  app.use(bodyparser.json());
  //allows to handle url endcoded data, where characters are changed to % 
  app.use(bodyparser.urlencoded({ extended: true }));

  app.get('/api/todos/:username', (req, res) => {
    Todos.find({username: req.params.username })
      .then((todos) => res.send(todos))
      .catch(err => console.error(err));
  });

  app.get('/api/todo/:id', (req, res) => {
    Todos.findById({ _id: req.params.id })
    .then((todo) => res.send(todo))
    .catch(err => console.error(err));
  });

  app.post('/api/todo', (req, res) => {
    //body is from body parser
    //if have id must be a update
    if(req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment})
        .then(res.send('Successfully updated'))
        .catch(err => console.error(err));
    }
    //if no id then must be a create
    else {
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
    }
  });

  app.delete('/api/todo', (req, res) => {
    Todos.findByIdAndRemove(req.body.id)
    .then(res.send('Successfully deleted'))
    .catch(err => console.error(err)); 
  });


}//end of export function