const Scheme = require('../schemes/scheme-model')
const db = require('../../data/db-config')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const scheme = await Scheme.findById(req.params.scheme_id)
    if(!scheme) {
      next({status: 404, 
        message: `scheme with scheme_id ${req.params.scheme_id} is not found`})
    } else {
      req.scheme = scheme
      next()
    }
  }catch(err) {
    next(err)
  }
}


/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme } = req.body
  if (!scheme || scheme === undefined || 
    typeof scheme !== 'string' ) return next({
    status: 400,
    message: 'invalid scheme_name',
  }) 
    next()
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const { instruction, step_number } = req.body
  if (!instruction || instruction === undefined || 
    typeof instruction !== 'string' ) return next({
    status: 400,
    message: 'invalid step',
  }) 
  if (step_number < 1 || 
    typeof step_number !== 'number' ) return next({
    status: 400,
    message: 'invalid step',
  }) 
    next()
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
