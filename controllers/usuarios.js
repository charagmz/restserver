const { response, request } = require('express');//se hace para que vsc pueda intepretar las propiedades del objeto response
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {
    const {q, nombre = 'NO Name', apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre, 
        apikey
    });
};

const usuariosPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });
};

const usuariosPost = async (req, res = response) => {
    
    //const {google, ...rest} = req.body;//del body quita el campo google y los demas quedan en rest
    const {nombre, correo, password, rol} = req.body;
    //console.log(body);
    const usuario = new Usuario({nombre, correo, password, rol});

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        return res.status(400).json({
            msg: 'Ese correo ya esta registrado'
        });
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await usuario.save();
    res.json({
        usuario
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
