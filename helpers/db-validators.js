const Role = require('../models/role');

const esRolValido = async(rol='') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        //error personalizado que va a ser atrapado en el custom
        throw new Error(`El rol ${ rol } no esta registrado en la base de datos`)
    }
}

module.exports = {
    esRolValido
}