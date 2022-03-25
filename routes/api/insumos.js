const router = require('express').Router();

const {Insumo} = require('../../db');

router.get('/', async (req,res) =>{
    const insumos = await Insumo.findAll();
    res.json(insumos);
});

router.get('/:insumoId', async (req,res) =>{
    console.log("aqui");
    const insumo = await Insumo.findOne({ where: { idInsumo: req.params.insumoId }});
    res.json(insumo);
});


router.post('/new', async (req, res) => {
    const insumo = await Insumo.create(req.body);
    res.json(insumo);
});

router.put('/update/:insumoId', async (req,res) => {
    await Insumo.update(req.body,{
        where:{idInsumo: req.params.insumoId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:insumoId', async (req,res) =>{
    await Insumo.destroy({
        where:{idInsumo: req.params.insumoId}
    });
    res.json({success: 'Se ha borrado el insumo'})
});
module.exports  = router;