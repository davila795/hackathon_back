import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js'

router.get('/', userController.findAll);

router.post('/', userController.addList);

router.get('/:id', userController.findOne);

router.put('/:id', userController.updateOne);

router.delete('/:id', userController.removeOne);

export default router;
