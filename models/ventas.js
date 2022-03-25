module.exports = (sequelize, type) => {
    return sequelize.define('venta', {
        idVenta: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: type.DATEONLY
    })
}