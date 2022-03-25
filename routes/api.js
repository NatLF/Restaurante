const router = require('express').Router();
const middleware = require('./middleware');

const apiInsumosRouter = require('./api/insumos');
//router.use('/insumos', middleware.checkToken, apiInsumosRouter);
router.use('/insumos', apiInsumosRouter);

const apiCategoriasRouter = require('./api/categorias');
router.use('/categorias', apiCategoriasRouter);

const apiProveedoresRouter = require('./api/proveedores');
router.use('/proveedores', apiProveedoresRouter);

const apiVentasRouter = require('./api/ventas');
router.use('/ventas', apiVentasRouter);

const apiIngredientesRouter = require('./api/ingredienteExtra');
router.use('/ingredientesextra', apiIngredientesRouter);

const apiUsuarios = require('./api/usuarios');
router.use('/usuarios', apiUsuarios);

const apiProductoProveedor = require('./api/productoProveedor');
router.use('/productoProveedor', apiProductoProveedor);

const apiRecetas = require('./api/recetas');
router.use('/recetas', apiRecetas);

const apiIngredienteRecetas = require('./api/ingredientesdereceta');
router.use('/ingredientesReceta', apiIngredienteRecetas);

const apiPlatilloVendido = require('./api/platillovendido');
router.use('/platilloVendido', apiPlatilloVendido);

const apiIngredienteVendido = require('./api/ingredienteExtraVendido');
router.use('/ingredienteVendido', apiIngredienteVendido);


module.exports  = router;
