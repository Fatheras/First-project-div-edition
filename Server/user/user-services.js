const User = require('./models/user');

class UserService {
    getAllUsers() {
        return User.findAll()
    }

    getUser(userId) {
        return Number.isInteger(userId)
            ? User.findOne({
                where: {
                    Id: userId
                }
            })
            : null;
    }

    async deleteUser(userId) {
        return Number.isInteger(userId)
            ? User.destroy({
                where: {
                    Id: userId
                }
            })
            : null
    }

    async createUser(model) {
        if (model) {
            if (!model.id) {
                return User.create(model);
            }
            throw new Error('User already exists');
        }
    }

    async updateUser(userId, model) {
        if (model && Number.isInteger(userId)) {
            delete model['id'];
            let result = await User.update(model, { where: { id: userId } })
            return !!result[0];
        }
    }
}

module.exports = UserService;
