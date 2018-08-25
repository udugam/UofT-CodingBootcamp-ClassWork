var connection = require('./connection.js')

var orm = {
    displayAll: function(columnName, tableName,) {
        var queryString = `SELECT ?? FROM ??`
        connection.query(queryString,[columnName,tableName], function(err,result) {
            if (err) throw err
            console.log(result)
        })
    }
}

module.exports = orm