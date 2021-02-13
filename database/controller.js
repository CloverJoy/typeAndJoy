const { Questions } = require('./index.js');

const retrieveQuestions = async () => {
  try {
    const questions = await Questions.find({});
    console.log(questions);
    console.log('fired!')
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

exports.retrieve = retrieveQuestions;
exports.bulk = bulkInsert;