import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const hashUsers = async (users) => {
  for (let user of users) {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
  }
  return users;
}

export default hashUsers;
