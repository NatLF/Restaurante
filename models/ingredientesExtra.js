module.exports = (sequelize, type) => {
    return sequelize.define('ingredienteExtra', {
        idIngrediente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        precio: type.DECIMAL(10,0)
    })
}