const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '10m' });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.REFRESH_SECRET_KEY, { expiresIn: '7d' });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
