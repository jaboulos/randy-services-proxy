const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/espn');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const photosSchema = {
  picture: { large: String, medium: String, thumbnail: String },
};

const Photos = mongoose.model('Photos', photosSchema);

const funcs = {
  db, Photos,
};
module.exports = funcs;
