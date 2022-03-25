const router = require('express').Router();

const {Ingrediente} = require('../../db');

router.get('/', async (req,res) =>{
    const ingredientes = await Ingrediente.findAll();
    res.json(ingredientes);
});

router.get('/:ingredienteId', async (req,res) =>{
    const ingrediente = await Ingrediente.findOne({ where: { idIngrediente: req.params.ingredienteId }});
    res.json(ingrediente);
});

router.post('/new', async (req, res) => {
    const ingrediente = await Ingrediente.create(req.body);
    res.json(ingrediente);
});

router.put('/update/:ingredienteId', async (req,res) => {
    await Ingrediente.update(req.body,{
        where:{idIngrediente: req.params.ingredienteId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:ingredienteId', async (req,res) =>{
    await Ingrediente.destroy({
        where:{idIngrediente: req.params.ingredienteId}
    });
    res.json({success: 'Se ha borrado el ingrediente'})
});
module.exports  = router;