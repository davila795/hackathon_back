const { Router } = require('express');
const neasController = require('../controllers/neasController.js');
const auth = require('../middleware/authMiddleware.js');
const router = Router();

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

module.exports = router;
