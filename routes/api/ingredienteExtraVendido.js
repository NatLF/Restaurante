const router = require('express').Router();

const {IngredienteVendido} = require('../../db');

router.get('/', async (req,res) =>{
    const ingredienteVendidos = await IngredienteVendido.findAll();
    res.json(ingredienteVendidos);
});

router.get('/:ingredienteVendidoId', async (req,res) =>{
    const ingredienteVendido = await IngredienteVendido.findOne({ where: { idIngredienteVendido: req.params.ingredienteVendidoId }});
    res.json(ingredienteVendido);
});

router.post('/new', async (req, res) => {
    const ingredienteVendido = await IngredienteVendido.create(req.body);
    res.json(ingredienteVendido);
});

router.put('/update/:ingredienteVendidoId', async (req,res) => {
    await IngredienteVendido.update(req.body,{
        where:{idIngredienteVendido: req.params.ingredienteVendidoId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:ingredienteVendidoId', async (req,res) =>{
    await IngredienteVendido.destroy({
        where:{idIngredienteVendido: req.params.ingredienteVendidoId}
    });
    res.json({success: 'Se ha borrado el ingredienteVendido'})
});
module.exports  = router;