const Sequelize = require('sequelize')
const db = require('../database/User_db')

module.exports = db.sequelize.define(
    'user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fname: {
            type: Sequelize.STRING
        },
        lname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        date_add: {
            type: Sequelize.DATE,
            defultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    }
)