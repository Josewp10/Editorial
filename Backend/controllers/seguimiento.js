const ServicioPg = require("../services/postgres");


// se valida la informacion 

let validar = seguimiento => {

    if (!seguimiento) {
        throw {
            ok: false,
            mensaje: "Ingresar información del seguimiento"
        };

    } else if (!seguimiento.estado) {
        throw {
            ok: false,
            mensaje: "Ingrese el estado del seguimiento"
        };

    } else if (!seguimiento.obra) {
        throw {
            ok: false,
            mensaje: "Ingrese la obra correspondiente"
        };  
    } 
};


let guardar = async seguimiento => {
    let _servicio = new ServicioPg();
    let sql = ``;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultar = async (seguimiento) => {
    let _servicio = new ServicioPg();
    let sql = ``;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


let eliminar = async (toDelete) => {
    let _servicio = new ServicioPg();
    let sql = ``
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
}

// exportar los metodos para ser usados en otros archivos

module.exports = { validar, guardar, consultar, eliminar};