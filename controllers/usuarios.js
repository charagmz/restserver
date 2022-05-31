const { response } = require('express');//se hace para que vsc pueda intepretar las propiedades del objeto response

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
};

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'put API - controlador'
    });
};

const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'post API - controlador'
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
