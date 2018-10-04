const Sequelize = require('sequelize');
const db = require('../../db/models/db')

const User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [3, 30],
          }
    },
    lastName: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [4, 15],
          }
    },
    address: {
        type: Sequelize.STRING,
    },
})

module.exports = User;