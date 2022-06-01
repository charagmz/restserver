const { response, request } = require('express');//se hace para que vsc pueda intepretar las propiedades del objeto response

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

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
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
