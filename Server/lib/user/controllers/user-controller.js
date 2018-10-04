const userService = require('../services/user-service');

module.exports = {
  async getAllUsers(req, res) {
    res.status(200).send(await userService.getAllUsers());
  },

  async getOneUser(req, res, next) {
    let id = parseInt(req.params.id);
    let user = await userService.getUserById(id);
    if (user) {
      res.status(200).send(user);
      
    } else {
      res.sendStatus(404);
    }
  },

  async deleteUser(req, res) {
    let id = parseInt(req.params.id);
    let result = await userService.deleteUserById(id)
    result ? res.sendStatus(204):res.sendStatus(404);
  },

  async createNewUser(req, res) {
    let user = req.body;
    let result = await userService.createUser(user);
    logger.info(`Create user: ${user}`)
    res.status(201).send(result);

  },

  async updateUser(req, res) {
    let id = parseInt(req.params.id);
    let user = req.body;
    let result = await userService.updateUser(id, user);
    logger.info(`Update user: ${user}`)
    res.status(200).send(result);
  }

}