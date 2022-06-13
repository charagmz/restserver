const path = require('path');
const fs   = require('fs');
const { response } = require("express");
const { subirArchivo } = require("../helpers");
const {Usuario, Producto} = require('../models');

const cargarArchivo = async (req, res = response) => {

    try {
        //const nombre = await subirArchivo(req.files, ['txt', 'md'], 'textos');
        const nombre = await subirArchivo(req.files, undefined, 'imgs');
        res.json({nombre});    
    } catch (error) {
        res.status(400).json({error});
    }
}

const actualizarImagen = async (req, res = response) => {

    const {id, coleccion} = req.params
    let modelo;
    switch (coleccion) {
        case 'usuarios':
                modelo = await Usuario.findById(id);
                if (!modelo) {
                    return res.status(400).json({msg: `No existe un usuario con el id ${id}`});
                }
        break;
        case 'productos':
                modelo = await Producto.findById(id);
                if (!modelo) {
                    return res.status(400).json({msg: `No existe un producto con el id ${id}`});
                }
        break;
    
        default:
            return res.status(500).json({msg: 'Coleccion no implementada'});
    }

    try {
        // Limpiar imagenes previas
        if (modelo.img) {
            const pathImagen = path.join(__dirname, '../uploads', coleccion, modelo.img);
            if (fs.existsSync(pathImagen)) {
                fs.unlinkSync(pathImagen);
            }
        }

        const nombre = await subirArchivo(req.files, undefined, coleccion);
        modelo.img = nombre;
        await modelo.save();

        return res.json(modelo);
    } catch (error) {
        res.status(400).json({error});
    }
}


module.exports = {
    cargarArchivo,
    actualizarImagen
}