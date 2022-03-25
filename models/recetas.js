module.exports = (sequelize, type) => {
    return sequelize.define('receta', {
        idReceta: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        costo: type.DECIMAL(10,2),
        precioDeVenta: type.DECIMAL(10,2)
    })
}