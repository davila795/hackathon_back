import express from 'express';
const router = express.Router();
import neasController from '../controllers/neasController.js'

router.get('/', neasController.findAll);

router.post('/', neasController.addList);

router.get('/:id', neasController.findOne);

router.put('/:id', neasController.updateOne);

router.delete('/:id', neasController.removeOne);

export default router;
