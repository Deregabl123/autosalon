const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("db_name", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

const db = {}
db.sequelize = sequelize;
const userDefiner = require("../models/user")
db.user = userDefiner(sequelize)
// db.user = require("../models/user")
const autoDefiner = require("../models/auto")
db.auto = autoDefiner(sequelize)
const supplyDefiner = require("../models/supply")
db.supply = supplyDefiner(sequelize)
const purchaseDefiner = require("../models/purchase")
db.purchase = purchaseDefiner(sequelize)

db.purchase.hasMany(db.user);
db.purchase.hasMany(db.auto);
db.purchase.hasMany(db.supply);


db.ROLES = ["user", "admin"]

module.exports = db;