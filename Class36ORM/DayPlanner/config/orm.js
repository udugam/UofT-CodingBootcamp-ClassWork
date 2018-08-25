var connection = require('./connection.js')

var orm = {
    selectAll: function(tableName, callback) {
        var queryStatement = `SELECT * FROM ??`
        connection.query(queryStatement,[tableName],function(err,data){
            if (err) throw err
            callback(data) 
        })
    }
}

module.exports = orm