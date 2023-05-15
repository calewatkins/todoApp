const Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    var starterTodos = [
      {
        username: 'test',
        todo: 'buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.insertMany(starterTodos).then((res) => {
      console.log(res);
    });

    // const testOne = new Todos({
    //   username: 'test1',
    //   todo: 'cook dinner',
    //   isDone: false,
    //   hasAttachment: false     
    // });

    // testOne.save().then(() => {
    //   console.log(testOne);
    // });
  });

  app.get('/api/findOne', (req, res) => {
    Todos.findOne({'todo': 'Feed dog'}).then((data) => {
      console.log(data);






































      
    }).catch((err) => {
      console.log("In the catch block");
    });
  })
}