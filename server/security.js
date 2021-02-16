const bcrypt = require('bcrypt');

const generateHashPassword = async (password) => {
  try {
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashed)
  return hashed;
  } catch (err) {
    console.log(err);
  }
};

const compare = async(password, hashed) => {
  try {
    const isMatch = await bcrypt.compare(password, hashed);
    return isMatch;
  } catch(err) {
    console.log(err);
  }
};

exports.generateHashPassword = generateHashPassword;
exports.compare = compare;

