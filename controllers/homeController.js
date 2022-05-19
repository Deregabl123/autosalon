const db = require('../config/db.config')
exports.index = function (request, response) {
    response.render("index.hbs");
};
exports.about = function (request, response) {
    response.render("about.hbs");
};
exports.market = function (request, response) {
    db.auto.findAll({raw:true}).then(data => {
        response.render("market.hbs", {
            autos: data
        });
    }).catch(err => console.log(err))
};   
exports.license = function (request, response) {
    response.render("license.hbs");
};