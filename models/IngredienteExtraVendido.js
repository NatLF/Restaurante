module.exports = (sequelize, type) => {
    return sequelize.define('ingredienteExtraVendido', {
        idIngredienteVendido: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })
}