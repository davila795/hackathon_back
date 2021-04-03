import express from 'express';
import * as neasController from '../controllers/neasController.js';
import auth from '../middleware/authMiddleware.js'
const router = express.Router();

router.get('/', neasController.findAll);

router.post('/', neasController.addList);

router.get('/:id',
  auth,
  neasController.findOne
);

router.put('/:id',
  auth,
  neasController.updateOne
);

router.delete('/:id',
  auth,
  neasController.removeOne
);

export default router;
