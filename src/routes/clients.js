const { Router } = require('express');
const clientController = require('../controllers/clientController.js');
const auth = require('../middleware/authMiddleware.js');
const router = Router();

router.get('/', clientController.findAll);

router.post('/',
  auth
  , clientController.addList
);

router.get('/:id',
  auth,
  clientController.findOne
);

router.put('/:id',
  auth,
  clientController.updateOne
);

router.delete('/:id',
  auth,
  clientController.removeOne
);

module.exports = router;
