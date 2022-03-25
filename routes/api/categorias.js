const router = require('express').Router();

const {Categoria} = require('../../db');

router.get('/', async (req,res) =>{
    const categorias = await Categoria.findAll();
    res.json(categorias);
});

router.get('/:categoriaId', async (req,res) =>{
    const categoria = await Categoria.findOne({ where: { idCategoria: req.params.categoriaId }});
    res.json(categoria);
});

router.post('/new', async (req, res) => {
    const categoria = await Categoria.create(req.body);
    res.json(categoria);
});

router.put('/update/:categoriaId', async (req,res) => {
    await Categoria.update(req.body,{
        where:{idCategoria: req.params.categoriaId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:categoriaId', async (req,res) =>{
    await Categoria.destroy({
        where:{idCategoria: req.params.categoriaId}
    });
    res.json({success: 'Se ha borrado el categoria'})
});
module.exports  = router;