
const Sequelize = require("sequelize")

module.exports = function(sequelize) {
    return sequelize.define("purchase", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        buyer: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
    },{
        timestamps: false
    })
}