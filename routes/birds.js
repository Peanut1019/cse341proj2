const express = require('express');
const router = express.Router();
const birdsController = require('../controlers/birds');
const utility = require('../utilites/validation')

router.get('/', birdsController.getAll);
router.get('/:id', birdsController.getOne);
router.post('/', utility.validate, birdsController.createBird);
router.put('/:id', utility.validate, birdsController.updateBird);
router.delete('/:id', birdsController.deleteBird);

module.exports = router;