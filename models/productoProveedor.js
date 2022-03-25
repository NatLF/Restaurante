

module.exports = (sequelize, type) => {
    return sequelize.define('productoproveedor', {
        idProductoProveedor: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: type.INTEGER,
        unidad: type.STRING,
        precio: type.DECIMAL(10,2),
        activo: type.BOOLEAN
        
    })
}

