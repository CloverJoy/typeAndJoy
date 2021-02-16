const { Questions, Results, Admins } = require('./index.js');
const { generateHashPassword, compare } = require('../server/security.js');

const retrieveQuestions = async () => {
  try {
    const questions = await Questions.find({}).sort({createdAt: -1});
    console.log('Questions queried')
    return questions
  } catch (error) {
    console.log(error);
  }
};

const bulkInsert = async (collections) => {
  try {
    const inserted = await Questions.insertMany(collections);
    console.log(inserted);
  } catch (error) {
    console.log(error);
  }
};

const insertQuestion = async (question) => {
  try {
    const inserted = await Questions.create({ question: question.question, answer: question.answer, type: question.type, pic: question.pic });
    console.log(inserted);
  } catch (error) {
    console.log(error);
  }
};

const deleteQuestion = async (id) => {
  try {
    const deleted = await Questions.deleteOne({_id: id});
    console.log(deleted);
  } catch (err) {
    console.log(err);
  }
};

const deleteResult = async (id) => {
  try {
    const deleted = await Results.deleteOne({_id: id});
    console.log(deleted);
  } catch (err) {
    console.log(err);
  }
};

const retrieveResults = async () => {
   try {
    const results = await Results.find({}).sort({createdAt: -1});
    return results
  } catch (error) {
    console.log(error);
  }
};

const insertResult = async (result) => {
    try {
    const inserted = await Results.create({ name: result.name, result: result.result, email: result.email });
    console.log(inserted);
  } catch (error) {
    console.log(error);
  }
};

const createAdmin = async (info) => {
  try {
    const created = await Admins.create({
      fullName: info.fullName,
      userName: info.userName,
      password: await generateHashPassword(info.password),
      email: info.email,
      mbtiType: info.mbtiType
    });
    console.log(created);
  } catch (err) {
    console.log(err);
  }
};

const loginAdmin = async (info) => {
  try {
    const fromDb = await Admins.findOne({userName: info.userName});
    if (!fromDb) { return 'nouser';}
    const passwordMatched = await compare(info.password, fromDb.password);
    if (!passwordMatched) {
      return 'passincorrect'
    } else if (passwordMatched) {
      return fromDb;
    }
  } catch (err) {
    console.log(err);
  }
};

// loginAdmin({userName: 'seradotwav', password: 'password'});

exports.retrieve = retrieveQuestions;
exports.bulk = bulkInsert;
exports.insertQuestion = insertQuestion;
exports.deleteQuestion = deleteQuestion;
exports.deleteResult = deleteResult;
exports.insertResult = insertResult;
exports.retrieveResults = retrieveResults;
exports.createAdmin = createAdmin;
exports.loginAdmin = loginAdmin;
