
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
PORTNODE = 3001;
secretKey = 'neophotokeysecret';
SERVERIP = 'localhost';
SERVER_PORT = '3001';
// mongoose.connect('mongodb+srv://neophoto:6JpfILZs7uOmDuMY@neophoto-8ccqw.mongodb.net/neophoto?retryWrites=true&w=majority', {
mongoose.connect('mongodb://adminneofotocomua:pfwVALrwfLc8ZZk1C0qg@localhost:27017/neofotocomua', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then( () => {
  console.log('database connected')
})
.catch((error) => console.log(error));


