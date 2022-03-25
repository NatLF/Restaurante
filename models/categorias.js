module.exports = (sequelize, type) => {
    return sequelize.define('categoria', {
        idCategoria: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING
    })
}