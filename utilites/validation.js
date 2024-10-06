const { body, validationResult } = require('express-validator');
const birdValidationRules = () => {
  return [
    body('commonName').isLength({ min: 1}),
    body('scientificName').isLength({ min: 1 }),
    body('food').isLength({ min: 1 }),
    body('region').isLength({ min: 1 })
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  birdValidationRules,
  validate,
}