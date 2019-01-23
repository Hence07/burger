const burger = require("../models/burger.js");

module.exports = function (app) {
    app.post("/api/burger", function (req, res) {
        burger.create(req.body.name, req.body.sleepy)
            .then(function (data) {
                res.json({
                    id: data.insertId
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    app.put("/api/burger/:id", function (req, res) {
        let devoured = (req.body.sleepy == 'true');
        burger.update(devoured, req.params.id)
            .then(function (data) {
                if (data.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    });

  