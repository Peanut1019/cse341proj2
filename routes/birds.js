const express = require('express');
const router = express.Router();
const birdsController = require('../controlers/birds');
const utility = require('../utilites/validation')
const {isAuthenticated} = require('../utilites/authenticate')

router.get('/', birdsController.getAll);
router.get('/:id', birdsController.getOne);
router.post('/', isAuthenticated, utility.validate, birdsController.createBird);
router.put('/:id', isAuthenticated, utility.validate, birdsController.updateBird);
router.delete('/:id', isAuthenticated, birdsController.deleteBird);

module.exports = router;