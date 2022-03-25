const Sequelize = require('sequelize');

const InsumoModel =  require('./models/insumos');
const CategoriaModel =  require('./models/categorias');
const ProveedorModel =  require('./models/proveedores');
const VentaModel =  require('./models/ventas');
const IngredienteModel =  require('./models/ingredientesExtra');
const UserModel =  require('./models/usuarios');
const ProductoProveedorModel =  require('./models/productoProveedor');
const RecetasModel =  require('./models/recetas');
const IngredienteRecetaModel =  require('./models/ingredientesdereceta');
const PlatilloVendidoModel =  require('./models/platillosvendidos');
const IngredienteVendidoModel =  require('./models/IngredienteExtraVendido');
const { BelongsToMany } = require('sequelize');
const ingredientesExtra = require('./models/ingredientesExtra');

const sequelize =  new Sequelize('restaurantedb3','root','LinkinPark22',{
    host: 'localhost',
    dialect: 'mysql'
});

//Modelo
const Insumo =  InsumoModel(sequelize,Sequelize);
const Categoria =  CategoriaModel(sequelize,Sequelize);
const Proveedor =  ProveedorModel(sequelize,Sequelize);
const Venta =  VentaModel(sequelize,Sequelize);
const Ingrediente =  IngredienteModel(sequelize,Sequelize);
const Usuario =  UserModel(sequelize,Sequelize);
const ProductoProveedor =  ProductoProveedorModel(sequelize,Sequelize);
const Receta =  RecetasModel(sequelize,Sequelize);
const IngredienteReceta =  IngredienteRecetaModel(sequelize,Sequelize);
const PlatilloVendido =  PlatilloVendidoModel(sequelize,Sequelize);
const IngredienteVendido =  IngredienteVendidoModel(sequelize,Sequelize);


//1 proveedor tiene muchos productoproveedor
// 1 to Many
Proveedor.hasMany(ProductoProveedor,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
ProductoProveedor.belongsTo(Proveedor);

Insumo.hasMany(ProductoProveedor,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
ProductoProveedor.belongsTo(Insumo);

//IngredienteDeReceta
Receta.hasMany(IngredienteReceta,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
IngredienteReceta.belongsTo(Receta);

Insumo.hasMany(IngredienteReceta,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
IngredienteReceta.belongsTo(Insumo);


//receta-categoria
Categoria.hasMany(Receta,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
Receta.belongsTo(Categoria);

//Platillo vendido
Receta.hasMany(PlatilloVendido,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
PlatilloVendido.belongsTo(Receta);

Venta.hasMany(PlatilloVendido,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
PlatilloVendido.belongsTo(Venta);

//Ingrediente extra vendido
Ingrediente.hasMany(IngredienteVendido,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
IngredienteVendido.belongsTo(Ingrediente);

PlatilloVendido.hasMany(IngredienteVendido,{
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
IngredienteVendido.belongsTo(PlatilloVendido);

//////////////////////////////////////

sequelize.sync({force: false})
    .then(() =>{
        console.log("Tablas sincronizadas")
    })
module.exports = {
    Insumo,
    Categoria,
    Proveedor,
    Venta,
    Ingrediente,
    Usuario,
    ProductoProveedor,
    Receta,
    IngredienteReceta,
    PlatilloVendido,
    IngredienteVendido
}