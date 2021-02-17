const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const generateToken = (data) => {
  const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  return token;
}

const authenticateToken = (req, res, next) => {
  console.log(req.headers.token);
  const authHeader = req.headers.token;
  const auth = authHeader && authHeader.split(' ')[1];
  if (authHeader == null) return res.sendStatus(401);
  jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) return res.sendStatus(403);
    console.log(data);
    next()
  });

}

exports.generateHashPassword = generateHashPassword;
exports.compare = compare;
exports.generateToken = generateToken;
exports.authenticateToken = authenticateToken;

