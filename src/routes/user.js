const { Router } = require('express');
const userController = require('../controllers/userController.js');
const auth = require('../middleware/authMiddleware.js');
const router = Router();

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

module.exports= router;
