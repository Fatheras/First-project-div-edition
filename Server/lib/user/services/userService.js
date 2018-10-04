const User = require('../models/user');

module.exports = {

    async getAllUsers(){
        return User.findAll();
    },

    async getUserById(id){
        return Number.isInteger(id)
        ? User.findOne({
            where: {
                id: id,
            }
        })
        : null;
    },

    async deleteUserById(id) {
        return Number.isInteger(id)
        ? User.destroy({
            where: {
                id: id,
            }
        })
        : null;
    },

    async createUser(user){
        if(user){
            return User.create(user);
        }
    },

    async updateUser(id, user){
        if(user && Number.isInteger(id)) {
            delete user['id'];
            let result = await User.update(user, {
                where: {
                    id: user.id,
                }
            })
            return result;
        }

    }
}
