const db = require('../config/db.config');
const express = require('express');
const hbs = require('hbs')

const homeRouter = require('../routes/homeRouter')

const PORT = process.env.PORT || 8080


db.sequelize
    .sync()
    .catch(err => {
        console.log(err);
    })



const app = express();
app.listen(PORT, () => console.log(`server started on port ${PORT}`))

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./views/css'));
app.use(express.static('./views/images'));
hbs.registerPartials('./views/partials')

app.use("/", homeRouter)


//А это 404 ошибка
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
})
