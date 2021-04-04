const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async (users) => {
  for (let user of users) {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
  }
  return users;
}
