const db = require('../config/db.config');
const express = require('express');

const userRouter = requier('../routes/userRouter')
const homeRouter = require('../routes/homeRouter')

const PORT = process.env.PORT || 8080


db.sequelize
    .sync()
    .catch(err => {
        console.log(err);
    })



const app = express();
app.listen(PORT, () => console.log(`server started on port ${PORT}`))

app.use("/user", userRouter)
app.use("/", homeRouter)


//А это 404 ошибка
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
})
