const router = require('express').Router();

router.use('/', require('./swagger'));

router.use('/birds', require('./birds'));

module.exports = router;