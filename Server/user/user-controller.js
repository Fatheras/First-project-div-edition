const UserService = require('./user-services');

class UserController {
    static async getAllUsers(req, res) {
        const service = new UserService();
        let users = await service.getAllUsers();
        res.status(200).send(users);
    }

    static async getUser(req, res) {
        let userId = parseInt(req.params.id);
        const service = new UserService();
        res.status(200).send(await service.getUser(userId));
    }

    static async deleteUser(req, res) {
        let userId = parseInt(req.params.id);
        const service = new UserService();
        let result = await service.deleteUser(userId);
        result ? res.sendStatus(204) : res.sendStatus(404);
    }

    static async createUser(req, res) {
        let model = req.body;
        const service = new UserService();
        let result = await service.createUser(model);
        res.status(200).send(result);
    }

    static async updateUser(req, res) {
        let id = parseInt(req.params.id);
        let model = req.body;
        const service = new UserService();
        res.status(200).send(await service.updateUser(id, model));
    }
}

module.exports = UserController;
