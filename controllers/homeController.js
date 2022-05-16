exports.index = function (request, response) {
    response.render("index.hbs");
};
exports.about = function (request, response) {
    response.render("about.hbs");
};
exports.market = function (request, response) {
    response.render("market.hbs");
};   
exports.license = function (request, response) {
    response.render("license.hbs");
};