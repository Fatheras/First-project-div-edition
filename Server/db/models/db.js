const Sequelize = require('sequelize');
module.exports = new Sequelize('sample', 'root', 'CNFYBCKFD', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}) 