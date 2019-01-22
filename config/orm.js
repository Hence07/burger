const connection = require('../config/connection.js');

function ORM(burgers) {
    this.burgers = burgers;

    this.selectAll = function () {
            const sql = `SELECT * FROM ??`;

            return new Promise(function (resolve, reject) {
                connection.query(sql, burgers, function (err, data) {
                    if (err) reject(err);
                    resolve(data);
                });
            })
        },

        this.insertOne = function (burgers) {
            const sql = `INSERT INTO ?? (burger_name) VALUES (?, ?)`;

            return new Promise(function (resolve, reject) {
                connection.query(sql, [burgers], function (err, data) {
                    if (err) reject(err);
                    resolve(data);
                });
            })
        },

        this.update = function (burger_name, id) {
            const sql = `UPDATE ?? SET sleepy = ? WHERE id = ?`;

            return new Promise(function (resolve, reject) {
                connection.query(sql, [burger_name, id], function (err, data) {
                    if (err) reject(err);
                    resolve(data);
                });
            })
        }

}

module.exports = ORM;