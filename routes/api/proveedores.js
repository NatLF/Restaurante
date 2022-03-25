const router = require('express').Router();

const {Proveedor} = require('../../db');

router.get('/', async (req,res) =>{
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
});

router.get('/:proveedorId', async (req,res) =>{
    console.log("aqui");
    const proveedor = await Proveedor.findOne({ where: { idProveedor: req.params.proveedorId }});
    res.json(proveedor);
});


router.post('/new', async (req, res) => {
    const proveedor = await Proveedor.create(req.body);
    res.json(proveedor);
});

router.put('/update/:proveedorId', async (req,res) => {
    await Proveedor.update(req.body,{
        where:{idProveedor: req.params.proveedorId}
    });
    res.json({success: 'Se ha modificado'})
});

router.delete('/delete/:proveedorId', async (req,res) =>{
    await Proveedor.destroy({
        where:{idProveedor: req.params.proveedorId}
    });
    res.json({success: 'Se ha borrado el proveedor'})
});
module.exports  = router;