module.exports = function(sequelize,DataTypes) {
    var Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes.STRING,
            validate: {len: [0,50]}
        },
        complete: DataTypes.BOOLEAN
    })
    return Todo
}