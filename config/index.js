const configValues = require('./config');

module.exports = {
  getDbConnectionString: function () {
    return 'mongodb+srv://' + configValues.userName + ':' + configValues.password + 
    '@cluster0.uiw223d.mongodb.net/' + configValues.database + '?retryWrites=true&w=majority';
  }
}
