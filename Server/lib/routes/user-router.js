const express = require('express');
const joi = require('joi');

const userController = require('../user/controllers/user-controller');
const checkParams = require('../server/models/check-params.middleware')
const User = require('../user/models/user')

const router = express.Router();

const handleErrorAsync = func => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error)
  }
}

router.get('/', handleErrorAsync(userController.getAllUsers));

router.get('/:id', handleErrorAsync(userController.getOneUser));
router.delete('/:id', handleErrorAsync(userController.deleteUser));
router.put('/:id', checkParams.validateSequelizeEntity(User), handleErrorAsync(userController.updateUser));

router.post('/', /*checkParams.validateParamsJoi(joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string(),
  phone: joi.string(),
  address: joi.string(),
})),*/ handleErrorAsync(userController.createNewUser));



module.exports = router;




