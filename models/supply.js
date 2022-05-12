const Sequelize = require("sequelize")

module.exports = function(sequelize) {
    return sequelize.define("supply", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        count: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },{
        timestamps: false
    })
}