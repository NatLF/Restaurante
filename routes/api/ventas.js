const router = require('express').Router();

const {Venta, PlatilloVendido, Receta, IngredienteVendido, Ingrediente} = require('../../db');
const IngredienteExtraVendido = require('../../models/IngredienteExtraVendido');
const ingredientesExtra = require('../../models/ingredientesExtra');

router.get('/', async (req,res) =>{
    const ventas = await Venta.findAll({
        include: [
          {
            model: PlatilloVendido, 
            include: [
                Receta
            ]
          }
        ]
      });
    res.json(ventas);
});

///REVISAR
router.get('/extras/:ventaId', async (req,res) =>{
    const venta = await PlatilloVendido.findAll({ 
        include: [{ model: IngredienteExtraVendido, include: [Ingrediente]}],
        /*where: { idVenta: req.params.ventaId }*/});
    res.json(venta);
});
router.get('/:ventaId', async (req,res) =>{
    const venta = await Venta.findOne({ where: { idVenta: req.params.ventaId }});
    res.json(venta);
});

router.post('/new', async (req, res) => {
    const venta = await Venta.create(req.body);
    res.json(venta);
});

router.put('/update/:ventaId', async (req,res) => {
    await Venta.update(req.body,{
        where:{idVenta: req.params.ventaId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:ventaId', async (req,res) =>{
    await Venta.destroy({
        where:{idVenta: req.params.ventaId}
    });
    res.json({success: 'Se ha borrado el venta'})
});
module.exports  = router;