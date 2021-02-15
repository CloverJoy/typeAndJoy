const { Questions } = require('./index.js');

const retrieveQuestions = async () => {
  try {
    const questions = await Questions.find({});
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

exports.retrieve = retrieveQuestions;
exports.bulk = bulkInsert;
exports.insertQuestion = insertQuestion;
exports.deleteQuestion = deleteQuestion;