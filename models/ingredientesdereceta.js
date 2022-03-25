module.exports = (sequelize, type) => {
    return sequelize.define('ingredientedereceta', {
        idIngredienteReceta: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: type.INTEGER
    })
}