const router = require('express').Router();

const {IngredienteReceta} = require('../../db');

router.get('/', async (req,res) =>{
    const ingredientesRecetas = await IngredienteReceta.findAll();
    res.json(ingredientesRecetas);
});

router.get('/:ingredienteRecetaId', async (req,res) =>{
    console.log("aqui");
    const ingredienteReceta = await IngredienteReceta.findOne({ where: { idIngredienteReceta: req.params.ingredienteRecetaId }});
    res.json(ingredienteReceta);
});


router.post('/new', async (req, res) => {
    const ingredienteReceta = await IngredienteReceta.create(req.body);
    res.json(ingredienteReceta);
});

router.put('/update/:ingredienteRecetaId', async (req,res) => {
    await IngredienteReceta.update(req.body,{
        where:{idIngredienteReceta: req.params.ingredienteRecetaId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:ingredienteRecetaId', async (req,res) =>{
    await IngredienteReceta.destroy({
        where:{idIngredienteReceta: req.params.ingredienteRecetaId}
    });
    res.json({success: 'Se ha borrado el ingredienteReceta'})
});
module.exports  = router;