const ServicioPg = require("../services/postgres");


// se valida la informacion 

let validar = tareas => {

    if (!tareas) {
        throw {
            ok: false,
            mensaje: "El id de la tarea"
        };

    } else if (!tareas.nombre) {
        throw {
            ok: false,
            mensaje: "El nombre de la tarea "
        };

    } else if (!tareas.descripcion) {
        throw {
            ok: false,
            mensaje: "La descripcion de la tarea"
        };
        
    } else if (!tareas.Encargado) {
        throw {
            ok: false,
            mensaje: "El encargado de la tarea."
        };
    }
};


let guardar = async tareas => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.tarea
                 (nombre, url, descripcion)VALUES (
                    '${tareas.id}',
                    '${tareas.nombre}',
                    '${tareas.descripcion}',
                    '${tareas.Encargado}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultar = async (tareas) => {
    let _servicio = new ServicioPg();
    let sql = `SELECT * FROM tarea `;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


let eliminar = async (toDelete) => {
    let _servicio = new ServicioPg();
    let sql = `DELETE FROM public.tarea WHERE id = ${toDelete.id}`
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
}

// exportar los metodos para ser usados en otros archivos

module.exports = { validar, guardar, consultar, eliminar};