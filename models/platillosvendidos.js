module.exports = (sequelize, type) => {
    return sequelize.define('platillovendido', {
        idPlatilloVendido: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: type.INTEGER
    })
}