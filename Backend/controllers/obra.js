const ServicioPg = require("../services/postgres");


// se valida la informacion 

let validar = obra => {

    if (!obra) {
        throw {
            ok: false,
            mensaje: "Ingresar información de la obra"
        };

    } else if (!obra.nombre) {
        throw {
            ok: false,
            mensaje: "Ingresar el nombre de la obra"
        };

    } else if (!obra.autor) {
        throw {
            ok: false,
            mensaje: "Ingresar el autor de la obra"
        };
  
    }
};


let guardar = async obra => {
    let _servicio = new ServicioPg();
    let sql = ``;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultar = async (obra) => {
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