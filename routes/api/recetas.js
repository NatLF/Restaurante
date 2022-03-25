const router = require('express').Router();

const {Receta, Insumo,IngredienteReceta,ProductoProveedor,Proveedor} = require('../../db');

router.get('/', async (req,res) =>{
    const recetas = await Receta.findAll({
        include: [
          {
            model: IngredienteReceta, 
            include: [
                Insumo
            ]
            
          }
        ]
      });
    res.json(recetas);
});

router.get('/:recetaId', async (req,res) =>{
    console.log("aqui");
    const receta = await Receta.findOne({ where: { idReceta: req.params.recetaId }});
    res.json(receta);
});


router.post('/new', async (req, res) => {
    const receta = await Receta.create(req.body);
    res.json(receta);
});

router.put('/update/:recetaId', async (req,res) => {
    await Receta.update(req.body,{
        where:{idReceta: req.params.recetaId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:recetaId', async (req,res) =>{
    await Receta.destroy({
        where:{idReceta: req.params.recetaId}
    });
    res.json({success: 'Se ha borrado el receta'})
});
module.exports  = router;