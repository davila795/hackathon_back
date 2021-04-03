import express from 'express';
import userController from '../controllers/userController.js';
import auth from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', userController.findAll);

router.post('/', userController.addList);

router.get('/:id',
  auth,
  userController.findOne
);

router.put('/:id',
  auth,
  userController.updateOne
);

router.delete('/:id',
  auth,
  userController.removeOne
);

export default router;
