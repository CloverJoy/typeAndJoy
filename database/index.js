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

const resultSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  result: {type: String, required: true},
}, { timestamps: true });

const adminSchema = new mongoose.Schema({
  fullName: {type: String, required: true},
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  mbtiType: {type: String},
}, { timestamps: true });

const Questions = mongoose.model('Questions', questionSchema);
const Results = mongoose.model('Results', resultSchema);
const Admins = mongoose.model('Admins', adminSchema);

exports.Questions = Questions;
exports.Results = Results;
exports.Admins = Admins;
