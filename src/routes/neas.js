import express from 'express';
import neasController from '../controllers/neasController.js';
import auth from '../middleware/authMiddleware.js'
const router = express.Router();

router.get('/',
  auth,
  neasController.findAll
);

router.post('/',
  auth,
  neasController.addList
);

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
