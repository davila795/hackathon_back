import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js'

const signUp = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    //  Check if username exists
    let newUser = await User.findOne({ username });
    if (newUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // //  Create new user
    newUser = new User(req.body);
    //  Hash password
    const salt = await bcryptjs.genSalt(10);
    newUser.password = await bcryptjs.hash(password, salt);

    await User.create(newUser);

    // Create JWT
    const payload = {
      user: {
        id: newUser.id
      }
    };

    //  Sign JWT
    jwt.sign(payload, process.env.SECRET, {
      expiresIn: 3600
    }, (error, token) => {
      if (error) throw error;
      res.json({ token });
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    //  If password is valid, create and sign JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, process.env.SECRET, {
      expiresIn: 3600
    }, (error, token) => {
      if (error) throw error;
      res.json({ token });
    });

  } catch (error) {
    console.log(error);
  }
};

const loggedInUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId).select('-password');
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export default { login, signUp, loggedInUser };
