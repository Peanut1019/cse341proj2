const express = require('express');
const router = express.Router();
const birdsController = require('../controlers/birds');

router.get('/', birdsController.getAll);
router.get('/:id', birdsController.getOne);
router.post('/', birdsController.createBird);
router.put('/:id', birdsController.updateBird);
router.delete('/:id', birdsController.deleteBird);

module.exports = router;