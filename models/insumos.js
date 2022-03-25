module.exports = (sequelize, type) => {
    return sequelize.define('insumo', {
        idInsumo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        codigo: type.STRING
        
    })
}