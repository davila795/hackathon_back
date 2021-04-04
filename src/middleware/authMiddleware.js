const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
  // Read header token
  const token = req.header('x-auth-token');

  // check if there is no token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  // validate token
  try {
    const cipher = jwt.verify(token, process.env.SECRET);
    req.user = cipher.user;
    next();

  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}
