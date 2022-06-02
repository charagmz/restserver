const { response, request } = require('express');//se hace para que vsc pueda intepretar las propiedades del objeto response
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
    const body = req.body;
    console.log(body);
    const usuario = new Usuario(body);
    await usuario.save();
    res.json({
        msg: 'post API - controlador',
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
