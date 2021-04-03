import express from 'express';
import authController from '../controllers/authController.js';
import auth from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', authController.signUp);

router.post('/login', authController.login);

router.get('/loggedUser',
  auth,
  authController.loggedInUser
);

export default router;
