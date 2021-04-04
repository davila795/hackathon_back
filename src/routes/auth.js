const { Router } = require('express');
const authController = require('../controllers/authController.js');
const auth = require('../middleware/authMiddleware.js');
const router = Router();

router.post('/', authController.signUp);

router.post('/login', authController.login);

router.get('/loggedUser',
  auth,
  authController.loggedInUser
);

router.get('/login/github', authController.oauthLogin)

router.get('/login/github/callback', authController.oauthLoginCallback);

module.exports = router;
