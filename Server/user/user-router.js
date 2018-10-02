const express = require('express');
const router = express.Router();
const UserController = require('./user-controller');
const checkParams = require('../server/models/check-params.middleware');
const joi = require('joi');
const User = require('../user/models/user');

const handleErrorAsync = func => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error);
  }
};

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUser);

router.delete('/:id', UserController.deleteUser);

router.post('/', checkParams.validateParamsJoi(joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string(),
  address: joi.string(),
  phone: joi.string(),
})),handleErrorAsync(UserController.createUser));

router.put('/:id', checkParams.validateSequelizeEntity(User), handleErrorAsync(UserController.updateUser));

module.exports = router; 