const router = require('express').Router();

const {Insumo} = require('../../db');

router.get('/', async (req,res) =>{
    res.send({success: 'yei'});
});

module.exports  = router;