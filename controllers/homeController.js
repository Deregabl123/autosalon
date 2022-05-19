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

exports.form = function (request, response) {
    response.render("form.hbs");
};

exports.addAuto = function (request, response) {
    const name = request.body.name;
    const model = request.body.model;
    const color = request.body.color;
    const price = request.body.price;

    const roleId = 2;
    db.auto.create({
        name: name,
        color: color,
        model: model,
        price: price
    }).then(res=>{
        const user = {id: res.id, name: res.name, color: res.color, model: res.model, price: res.price}
        console.log(user);
    }).catch(err=>console.log(err));
    response.redirect("/market");
};