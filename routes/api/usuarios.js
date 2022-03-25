const router = require('express').Router();
const bcrypt = require('bcryptjs');

const {Usuario} = require('../../db');
const{check, validationResult}= require('express-validator');

const moment =  require('moment');
const jwt = require('jwt-simple');

router.post('/new', [
    check('username','Nombre de usuario obligatorio').not().isEmpty(),
    check('password','Contrase;a obligatorioa').not().isEmpty(),
    check('email','Formato de correo invalido').isEmail()
],async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errores : errors.array()})
    }
    //Encriptar contrase;a
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const user =  await Usuario.create(req.body);

    res.json(user);
});

router.post('/login', async(req,res) =>{
    const user = await Usuario.findOne({where :{mail: req.body.mail} })

    if(user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if(iguales && (req.body.username == user.username)){
            res.json({success: createToken(user) })
        }else{
            res.json({error: 'Error en usuario y/o contraseña'})
        }
    }else{
        res.json({error: 'Error en usuario y/o contraseña'})
    }
})

const createToken = (user) =>{
    const payload = {
        usuarioId: user.idUsuario,
        createdAt: moment().unix(),
        expiredAd: moment().add(5,'minutes').unix()
    }

    return jwt.encode(payload,'secretsecret')
}

module.exports  = router;