const router = require('express').Router();

const {PlatilloVendido} = require('../../db');

router.get('/', async (req,res) =>{
    const platillosVendidos = await PlatilloVendido.findAll();
    res.json(platillosVendidos);
});

router.get('/:platilloVendidoId', async (req,res) =>{
    const platilloVendido = await PlatilloVendido.findOne({ where: { idPlatilloVendido: req.params.platilloVendidoId }});
    res.json(platilloVendido);
});

router.post('/new', async (req, res) => {
    const platilloVendido = await PlatilloVendido.create(req.body);
    res.json(platilloVendido);
});

router.put('/update/:platilloVendidoId', async (req,res) => {
    await PlatilloVendido.update(req.body,{
        where:{idPlatilloVendido: req.params.platilloVendidoId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:platilloVendidoId', async (req,res) =>{
    await PlatilloVendido.destroy({
        where:{idPlatilloVendido: req.params.platilloVendidoId}
    });
    res.json({success: 'Se ha borrado el platilloVendido'})
});
module.exports  = router;