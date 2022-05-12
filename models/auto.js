const Sequelize = require("sequelize")

module.exports = function(sequelize) {
    return sequelize.define("auto", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },{
        timestamps: false
    })
}