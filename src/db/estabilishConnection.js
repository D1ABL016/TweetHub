const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const sequelize = new Sequelize("twitterClone","root","Dontdothis@123", {
    host: "localhost",
    define: {
        timestamps: false,
    },
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize