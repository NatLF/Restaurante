module.exports = (sequelize, type) => {
    return sequelize.define('proveedor', {
        idProveedor: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING
        
    })
}