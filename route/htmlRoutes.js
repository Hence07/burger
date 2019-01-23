const burger = require("../models/burger.js");

module.exports = function (app) {
    app.get("/", function (req, res) {
        burger.all()
            .then(function (data) {
                res.render("index", {
                    cats: data
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    });
}