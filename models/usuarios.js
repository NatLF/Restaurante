module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        idUsuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        mail: type.STRING,
        password: type.STRING(150),
    })
}