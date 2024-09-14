const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('twitterClone', 'root', 'Dontdothis@123', {
    host: 'localhost',
    define: {
        timestamps: false,
    },
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize