const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost:/typeandjoy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('succesfully connect to DB!'))
  .catch(() => console.log('error'));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// schemas
const questionSchema = new mongoose.Schema({
  question: {type: String, unique: true, required: true},
  type: {type: String, required: true},
  answer: {type: String, required: true},
  pic: {type: String, required: true},
}, { timestamps: true });

const Questions = mongoose.model('Questions', questionSchema);

exports.Questions = Questions;
