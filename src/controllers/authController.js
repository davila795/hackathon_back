const User = require('../models/User.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const { getAccessToken, fetchGitHubUser } = require('../utils/oauthFunctions');

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;


exports.signUp = async (req, res, next) => {
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

exports.login = async (req, res, next) => {
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

exports.loggedInUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId).select('-password');
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.oauthLogin = (req, res) => {

  const redirect_uri = "http://localhost:4000/api/1.0/users/login/github/callback";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
  );

}

exports.oauthLoginCallback = async (req, res) => {

  const code = req.query.code;
  const access_token = await getAccessToken({ code, client_id, client_secret });
  const user = await fetchGitHubUser(access_token);
  if (user) {
    console.log(access_token)
    console.log(user);
    req.session.access_token = access_token;
    req.session.githubId = user.id;
    // Create the payload and sign the JWT
    const payload = {
      user: {
        email: user.email,
        username: user.username
      }
    }
    /*
    const token = jwt.sign(payload, process.env.SECRET, {
       expiresIn: 3600
    });*/
    return res.status(200).json({
      message: 'Login succesfully',
      token: access_token,
      user
    })
  } else {
    res.send("Login did not succeed!");
  }
};
